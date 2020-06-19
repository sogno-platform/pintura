import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovHydroDD extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroDD") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroDD.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroDD.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroDD.mwbase'
                                                 );
        }
        if ('cim:GovHydroDD.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pmax'
                                                 );
        }
        if ('cim:GovHydroDD.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pmin'
                                                 );
        }
        if ('cim:GovHydroDD.r' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.r'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.r'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.r'
                                                 );
        }
        if ('cim:GovHydroDD.td' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.td'
                                                 );
        }
        if ('cim:GovHydroDD.tf' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tf'
                                                 );
        }
        if ('cim:GovHydroDD.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tp'
                                                 );
        }
        if ('cim:GovHydroDD.velop' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroDD.velop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroDD.velop'
                                                 );
        }
        if ('cim:GovHydroDD.velcl' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroDD.velcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroDD.velcl'
                                                 );
        }
        if ('cim:GovHydroDD.k1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.k1'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.k1'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.k1'
                                                 );
        }
        if ('cim:GovHydroDD.k2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.k2'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.k2'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.k2'
                                                 );
        }
        if ('cim:GovHydroDD.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.ki'
                                                 );
        }
        if ('cim:GovHydroDD.kg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.kg'
                                                 );
        }
        if ('cim:GovHydroDD.tturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.tturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tturb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.tturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tturb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tturb'
                                                 );
        }
        if ('cim:GovHydroDD.aturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.aturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.aturb'
                                                 );
        }
        if ('cim:GovHydroDD.bturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.bturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.bturb'
                                                 );
        }
        if ('cim:GovHydroDD.tt' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroDD.tt'
                                                 );
        }
        if ('cim:GovHydroDD.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroDD.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroDD.db1'
                                                 );
        }
        if ('cim:GovHydroDD.eps' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroDD.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroDD.eps'
                                                 );
        }
        if ('cim:GovHydroDD.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroDD.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroDD.db2'
                                                 );
        }
        if ('cim:GovHydroDD.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv1'
                                                 );
        }
        if ('cim:GovHydroDD.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv1'
                                                 );
        }
        if ('cim:GovHydroDD.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv2'
                                                 );
        }
        if ('cim:GovHydroDD.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv2'
                                                 );
        }
        if ('cim:GovHydroDD.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv3'
                                                 );
        }
        if ('cim:GovHydroDD.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv3'
                                                 );
        }
        if ('cim:GovHydroDD.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv4'
                                                 );
        }
        if ('cim:GovHydroDD.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv4'
                                                 );
        }
        if ('cim:GovHydroDD.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv5'
                                                 );
        }
        if ('cim:GovHydroDD.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv5'
                                                 );
        }
        if ('cim:GovHydroDD.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gv6'
                                                 );
        }
        if ('cim:GovHydroDD.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.pgv6'
                                                 );
        }
        if ('cim:GovHydroDD.gmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gmax'
                                                 );
        }
        if ('cim:GovHydroDD.gmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroDD.gmin'
                                                 );
        }
        if ('cim:GovHydroDD.inputSignal' in object) {
            attributeEntries['filledEntries']['cim:GovHydroDD.inputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.inputSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroDD.inputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroDD.inputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroDD.inputSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroDD.inputSignal'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroDD.mwbase",
            "cim:GovHydroDD.pmax",
            "cim:GovHydroDD.pmin",
            "cim:GovHydroDD.r",
            "cim:GovHydroDD.td",
            "cim:GovHydroDD.tf",
            "cim:GovHydroDD.tp",
            "cim:GovHydroDD.velop",
            "cim:GovHydroDD.velcl",
            "cim:GovHydroDD.k1",
            "cim:GovHydroDD.k2",
            "cim:GovHydroDD.ki",
            "cim:GovHydroDD.kg",
            "cim:GovHydroDD.tturb",
            "cim:GovHydroDD.aturb",
            "cim:GovHydroDD.bturb",
            "cim:GovHydroDD.tt",
            "cim:GovHydroDD.db1",
            "cim:GovHydroDD.eps",
            "cim:GovHydroDD.db2",
            "cim:GovHydroDD.gv1",
            "cim:GovHydroDD.pgv1",
            "cim:GovHydroDD.gv2",
            "cim:GovHydroDD.pgv2",
            "cim:GovHydroDD.gv3",
            "cim:GovHydroDD.pgv3",
            "cim:GovHydroDD.gv4",
            "cim:GovHydroDD.pgv4",
            "cim:GovHydroDD.gv5",
            "cim:GovHydroDD.pgv5",
            "cim:GovHydroDD.gv6",
            "cim:GovHydroDD.pgv6",
            "cim:GovHydroDD.gmax",
            "cim:GovHydroDD.gmin",
            "cim:GovHydroDD.inputSignal",
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
            if (!GovHydroDD.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroDD: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroDD.attributeHTML(object, cimmenu);
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
export default GovHydroDD
