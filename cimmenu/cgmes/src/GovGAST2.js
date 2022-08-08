import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovGAST2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovGAST2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovGAST2.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST2.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST2.mwbase'
                                                 );
        }
        if ('cim:GovGAST2.w' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.w'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.w'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.w'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.w'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.w'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.w'
                                                 );
        }
        if ('cim:GovGAST2.x' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.x'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.x'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.x'
                                                 );
        }
        if ('cim:GovGAST2.y' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.y'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.y'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.y'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.y'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.y'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.y'
                                                 );
        }
        if ('cim:GovGAST2.z' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.z'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.z'],
                                                   'cim:Boolean',
                                                   'cim:GovGAST2.z'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.z'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.z'],
                                                   'cim:Boolean',
                                                   'cim:GovGAST2.z'
                                                 );
        }
        if ('cim:GovGAST2.etd' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.etd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.etd'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.etd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.etd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.etd'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.etd'
                                                 );
        }
        if ('cim:GovGAST2.tcd' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tcd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tcd'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.tcd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tcd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tcd'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.tcd'
                                                 );
        }
        if ('cim:GovGAST2.trate' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.trate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.trate'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST2.trate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.trate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.trate'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST2.trate'
                                                 );
        }
        if ('cim:GovGAST2.t' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.t'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.t'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t'
                                                 );
        }
        if ('cim:GovGAST2.tmax' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.tmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.tmax'
                                                 );
        }
        if ('cim:GovGAST2.tmin' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tmin'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.tmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tmin'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.tmin'
                                                 );
        }
        if ('cim:GovGAST2.ecr' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.ecr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.ecr'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.ecr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.ecr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.ecr'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.ecr'
                                                 );
        }
        if ('cim:GovGAST2.k3' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k3'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k3'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k3'
                                                 );
        }
        if ('cim:GovGAST2.a' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.a'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST2.a'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.a'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST2.a'
                                                 );
        }
        if ('cim:GovGAST2.b' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.b'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST2.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.b'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST2.b'
                                                 );
        }
        if ('cim:GovGAST2.c' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.c'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.c'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST2.c'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.c'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.c'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST2.c'
                                                 );
        }
        if ('cim:GovGAST2.tf' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.tf'
                                                 );
        }
        if ('cim:GovGAST2.kf' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.kf'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.kf'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.kf'
                                                 );
        }
        if ('cim:GovGAST2.k5' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k5'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k5'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k5'
                                                 );
        }
        if ('cim:GovGAST2.k4' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k4'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k4'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k4'
                                                 );
        }
        if ('cim:GovGAST2.t3' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t3'
                                                 );
        }
        if ('cim:GovGAST2.t4' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t4'
                                                 );
        }
        if ('cim:GovGAST2.tt' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.tt'
                                                 );
        }
        if ('cim:GovGAST2.t5' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST2.t5'
                                                 );
        }
        if ('cim:GovGAST2.af1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.af1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.af1'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.af1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.af1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.af1'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.af1'
                                                 );
        }
        if ('cim:GovGAST2.bf1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.bf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.bf1'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.bf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.bf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.bf1'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.bf1'
                                                 );
        }
        if ('cim:GovGAST2.af2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.af2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.af2'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.af2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.af2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.af2'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.af2'
                                                 );
        }
        if ('cim:GovGAST2.bf2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.bf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.bf2'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.bf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.bf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.bf2'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.bf2'
                                                 );
        }
        if ('cim:GovGAST2.cf2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.cf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.cf2'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.cf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.cf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.cf2'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.cf2'
                                                 );
        }
        if ('cim:GovGAST2.tr' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tr'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST2.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tr'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST2.tr'
                                                 );
        }
        if ('cim:GovGAST2.k6' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k6'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.k6'],
                                                   'cim:PU',
                                                   'cim:GovGAST2.k6'
                                                 );
        }
        if ('cim:GovGAST2.tc' in object) {
            attributeEntries['filledEntries']['cim:GovGAST2.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tc'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST2.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST2.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST2.tc'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST2.tc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'w': [CGMESProfile.shortNames.DY, ],
						'x': [CGMESProfile.shortNames.DY, ],
						'y': [CGMESProfile.shortNames.DY, ],
						'z': [CGMESProfile.shortNames.DY, ],
						'etd': [CGMESProfile.shortNames.DY, ],
						'tcd': [CGMESProfile.shortNames.DY, ],
						'trate': [CGMESProfile.shortNames.DY, ],
						't': [CGMESProfile.shortNames.DY, ],
						'tmax': [CGMESProfile.shortNames.DY, ],
						'tmin': [CGMESProfile.shortNames.DY, ],
						'ecr': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						'a': [CGMESProfile.shortNames.DY, ],
						'b': [CGMESProfile.shortNames.DY, ],
						'c': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'k5': [CGMESProfile.shortNames.DY, ],
						'k4': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'tt': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						'af1': [CGMESProfile.shortNames.DY, ],
						'bf1': [CGMESProfile.shortNames.DY, ],
						'af2': [CGMESProfile.shortNames.DY, ],
						'bf2': [CGMESProfile.shortNames.DY, ],
						'cf2': [CGMESProfile.shortNames.DY, ],
						'tr': [CGMESProfile.shortNames.DY, ],
						'k6': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovGAST2.mwbase",
            "cim:GovGAST2.w",
            "cim:GovGAST2.x",
            "cim:GovGAST2.y",
            "cim:GovGAST2.z",
            "cim:GovGAST2.etd",
            "cim:GovGAST2.tcd",
            "cim:GovGAST2.trate",
            "cim:GovGAST2.t",
            "cim:GovGAST2.tmax",
            "cim:GovGAST2.tmin",
            "cim:GovGAST2.ecr",
            "cim:GovGAST2.k3",
            "cim:GovGAST2.a",
            "cim:GovGAST2.b",
            "cim:GovGAST2.c",
            "cim:GovGAST2.tf",
            "cim:GovGAST2.kf",
            "cim:GovGAST2.k5",
            "cim:GovGAST2.k4",
            "cim:GovGAST2.t3",
            "cim:GovGAST2.t4",
            "cim:GovGAST2.tt",
            "cim:GovGAST2.t5",
            "cim:GovGAST2.af1",
            "cim:GovGAST2.bf1",
            "cim:GovGAST2.af2",
            "cim:GovGAST2.bf2",
            "cim:GovGAST2.cf2",
            "cim:GovGAST2.tr",
            "cim:GovGAST2.k6",
            "cim:GovGAST2.tc",
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
            if (!GovGAST2.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovGAST2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovGAST2.attributeHTML(object, cimmenu);
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
export default GovGAST2
