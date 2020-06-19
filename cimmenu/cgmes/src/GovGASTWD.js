import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovGASTWD extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovGASTWD") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovGASTWD.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGASTWD.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGASTWD.mwbase'
                                                 );
        }
        if ('cim:GovGASTWD.kdroop' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.kdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kdroop'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kdroop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.kdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kdroop'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kdroop'
                                                 );
        }
        if ('cim:GovGASTWD.kp' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kp'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kp'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kp'
                                                 );
        }
        if ('cim:GovGASTWD.ki' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.ki'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.ki'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.ki'
                                                 );
        }
        if ('cim:GovGASTWD.kd' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kd'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kd'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kd'
                                                 );
        }
        if ('cim:GovGASTWD.etd' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.etd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.etd'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.etd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.etd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.etd'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.etd'
                                                 );
        }
        if ('cim:GovGASTWD.tcd' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tcd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tcd'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.tcd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tcd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tcd'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.tcd'
                                                 );
        }
        if ('cim:GovGASTWD.trate' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.trate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.trate'],
                                                   'cim:ActivePower',
                                                   'cim:GovGASTWD.trate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.trate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.trate'],
                                                   'cim:ActivePower',
                                                   'cim:GovGASTWD.trate'
                                                 );
        }
        if ('cim:GovGASTWD.t' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.t'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.t'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t'
                                                 );
        }
        if ('cim:GovGASTWD.tmax' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tmax'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.tmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tmax'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.tmax'
                                                 );
        }
        if ('cim:GovGASTWD.tmin' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tmin'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.tmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tmin'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.tmin'
                                                 );
        }
        if ('cim:GovGASTWD.ecr' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.ecr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.ecr'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.ecr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.ecr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.ecr'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.ecr'
                                                 );
        }
        if ('cim:GovGASTWD.k3' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k3'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k3'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k3'
                                                 );
        }
        if ('cim:GovGASTWD.a' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.a'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGASTWD.a'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.a'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGASTWD.a'
                                                 );
        }
        if ('cim:GovGASTWD.b' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.b'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGASTWD.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.b'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGASTWD.b'
                                                 );
        }
        if ('cim:GovGASTWD.c' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.c'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.c'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGASTWD.c'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.c'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.c'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGASTWD.c'
                                                 );
        }
        if ('cim:GovGASTWD.tf' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.tf'
                                                 );
        }
        if ('cim:GovGASTWD.kf' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kf'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.kf'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.kf'
                                                 );
        }
        if ('cim:GovGASTWD.k5' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k5'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k5'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k5'
                                                 );
        }
        if ('cim:GovGASTWD.k4' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k4'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k4'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k4'
                                                 );
        }
        if ('cim:GovGASTWD.t3' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t3'
                                                 );
        }
        if ('cim:GovGASTWD.t4' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t4'
                                                 );
        }
        if ('cim:GovGASTWD.tt' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.tt'
                                                 );
        }
        if ('cim:GovGASTWD.t5' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.t5'
                                                 );
        }
        if ('cim:GovGASTWD.af1' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.af1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.af1'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.af1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.af1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.af1'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.af1'
                                                 );
        }
        if ('cim:GovGASTWD.bf1' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.bf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.bf1'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.bf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.bf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.bf1'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.bf1'
                                                 );
        }
        if ('cim:GovGASTWD.af2' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.af2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.af2'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.af2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.af2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.af2'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.af2'
                                                 );
        }
        if ('cim:GovGASTWD.bf2' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.bf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.bf2'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.bf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.bf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.bf2'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.bf2'
                                                 );
        }
        if ('cim:GovGASTWD.cf2' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.cf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.cf2'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.cf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.cf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.cf2'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.cf2'
                                                 );
        }
        if ('cim:GovGASTWD.tr' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tr'],
                                                   'cim:Temperature',
                                                   'cim:GovGASTWD.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tr'],
                                                   'cim:Temperature',
                                                   'cim:GovGASTWD.tr'
                                                 );
        }
        if ('cim:GovGASTWD.k6' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k6'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.k6'],
                                                   'cim:PU',
                                                   'cim:GovGASTWD.k6'
                                                 );
        }
        if ('cim:GovGASTWD.tc' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tc'],
                                                   'cim:Temperature',
                                                   'cim:GovGASTWD.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.tc'],
                                                   'cim:Temperature',
                                                   'cim:GovGASTWD.tc'
                                                 );
        }
        if ('cim:GovGASTWD.td' in object) {
            attributeEntries['filledEntries']['cim:GovGASTWD.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.td'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGASTWD.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGASTWD.td'],
                                                   'cim:Seconds',
                                                   'cim:GovGASTWD.td'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovGASTWD.mwbase",
            "cim:GovGASTWD.kdroop",
            "cim:GovGASTWD.kp",
            "cim:GovGASTWD.ki",
            "cim:GovGASTWD.kd",
            "cim:GovGASTWD.etd",
            "cim:GovGASTWD.tcd",
            "cim:GovGASTWD.trate",
            "cim:GovGASTWD.t",
            "cim:GovGASTWD.tmax",
            "cim:GovGASTWD.tmin",
            "cim:GovGASTWD.ecr",
            "cim:GovGASTWD.k3",
            "cim:GovGASTWD.a",
            "cim:GovGASTWD.b",
            "cim:GovGASTWD.c",
            "cim:GovGASTWD.tf",
            "cim:GovGASTWD.kf",
            "cim:GovGASTWD.k5",
            "cim:GovGASTWD.k4",
            "cim:GovGASTWD.t3",
            "cim:GovGASTWD.t4",
            "cim:GovGASTWD.tt",
            "cim:GovGASTWD.t5",
            "cim:GovGASTWD.af1",
            "cim:GovGASTWD.bf1",
            "cim:GovGASTWD.af2",
            "cim:GovGASTWD.bf2",
            "cim:GovGASTWD.cf2",
            "cim:GovGASTWD.tr",
            "cim:GovGASTWD.k6",
            "cim:GovGASTWD.tc",
            "cim:GovGASTWD.td",
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
            if (!GovGASTWD.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovGASTWD: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovGASTWD.attributeHTML(object, cimmenu);
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
export default GovGASTWD
