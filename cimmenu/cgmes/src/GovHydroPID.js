import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovHydroPID extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroPID") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroPID.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroPID.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroPID.mwbase'
                                                 );
        }
        if ('cim:GovHydroPID.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pmax'
                                                 );
        }
        if ('cim:GovHydroPID.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pmin'
                                                 );
        }
        if ('cim:GovHydroPID.r' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.r'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.r'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.r'
                                                 );
        }
        if ('cim:GovHydroPID.td' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.td'
                                                 );
        }
        if ('cim:GovHydroPID.tf' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tf'
                                                 );
        }
        if ('cim:GovHydroPID.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tp'
                                                 );
        }
        if ('cim:GovHydroPID.velop' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID.velop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID.velop'
                                                 );
        }
        if ('cim:GovHydroPID.velcl' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID.velcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID.velcl'
                                                 );
        }
        if ('cim:GovHydroPID.kd' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.kd'
                                                 );
        }
        if ('cim:GovHydroPID.kp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.kp'
                                                 );
        }
        if ('cim:GovHydroPID.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.ki'
                                                 );
        }
        if ('cim:GovHydroPID.kg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.kg'
                                                 );
        }
        if ('cim:GovHydroPID.tturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.tturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tturb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.tturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tturb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tturb'
                                                 );
        }
        if ('cim:GovHydroPID.aturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.aturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.aturb'
                                                 );
        }
        if ('cim:GovHydroPID.bturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.bturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.bturb'
                                                 );
        }
        if ('cim:GovHydroPID.tt' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID.tt'
                                                 );
        }
        if ('cim:GovHydroPID.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPID.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPID.db1'
                                                 );
        }
        if ('cim:GovHydroPID.inputSignal' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.inputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.inputSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPID.inputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.inputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.inputSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPID.inputSignal'
                                                 );
        }
        if ('cim:GovHydroPID.eps' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPID.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPID.eps'
                                                 );
        }
        if ('cim:GovHydroPID.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroPID.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroPID.db2'
                                                 );
        }
        if ('cim:GovHydroPID.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv1'
                                                 );
        }
        if ('cim:GovHydroPID.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv1'
                                                 );
        }
        if ('cim:GovHydroPID.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv2'
                                                 );
        }
        if ('cim:GovHydroPID.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv2'
                                                 );
        }
        if ('cim:GovHydroPID.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv3'
                                                 );
        }
        if ('cim:GovHydroPID.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv3'
                                                 );
        }
        if ('cim:GovHydroPID.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv4'
                                                 );
        }
        if ('cim:GovHydroPID.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv4'
                                                 );
        }
        if ('cim:GovHydroPID.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv5'
                                                 );
        }
        if ('cim:GovHydroPID.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv5'
                                                 );
        }
        if ('cim:GovHydroPID.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.gv6'
                                                 );
        }
        if ('cim:GovHydroPID.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID.pgv6'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroPID.mwbase",
            "cim:GovHydroPID.pmax",
            "cim:GovHydroPID.pmin",
            "cim:GovHydroPID.r",
            "cim:GovHydroPID.td",
            "cim:GovHydroPID.tf",
            "cim:GovHydroPID.tp",
            "cim:GovHydroPID.velop",
            "cim:GovHydroPID.velcl",
            "cim:GovHydroPID.kd",
            "cim:GovHydroPID.kp",
            "cim:GovHydroPID.ki",
            "cim:GovHydroPID.kg",
            "cim:GovHydroPID.tturb",
            "cim:GovHydroPID.aturb",
            "cim:GovHydroPID.bturb",
            "cim:GovHydroPID.tt",
            "cim:GovHydroPID.db1",
            "cim:GovHydroPID.inputSignal",
            "cim:GovHydroPID.eps",
            "cim:GovHydroPID.db2",
            "cim:GovHydroPID.gv1",
            "cim:GovHydroPID.pgv1",
            "cim:GovHydroPID.gv2",
            "cim:GovHydroPID.pgv2",
            "cim:GovHydroPID.gv3",
            "cim:GovHydroPID.pgv3",
            "cim:GovHydroPID.gv4",
            "cim:GovHydroPID.pgv4",
            "cim:GovHydroPID.gv5",
            "cim:GovHydroPID.pgv5",
            "cim:GovHydroPID.gv6",
            "cim:GovHydroPID.pgv6",
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
            if (!GovHydroPID.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroPID: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroPID.attributeHTML(object, cimmenu);
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
export default GovHydroPID
