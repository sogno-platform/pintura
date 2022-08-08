import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydroPelton extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroPelton") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroPelton.av0' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.av0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.av0'],
                                                   'cim:Area',
                                                   'cim:GovHydroPelton.av0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.av0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.av0'],
                                                   'cim:Area',
                                                   'cim:GovHydroPelton.av0'
                                                 );
        }
        if ('cim:GovHydroPelton.av1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.av1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.av1'],
                                                   'cim:Area',
                                                   'cim:GovHydroPelton.av1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.av1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.av1'],
                                                   'cim:Area',
                                                   'cim:GovHydroPelton.av1'
                                                 );
        }
        if ('cim:GovHydroPelton.bp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.bp'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.bp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.bp'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.bp'
                                                 );
        }
        if ('cim:GovHydroPelton.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPelton.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPelton.db1'
                                                 );
        }
        if ('cim:GovHydroPelton.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.db2'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPelton.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.db2'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroPelton.db2'
                                                 );
        }
        if ('cim:GovHydroPelton.h1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.h1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.h1'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.h1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.h1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.h1'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.h1'
                                                 );
        }
        if ('cim:GovHydroPelton.h2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.h2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.h2'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.h2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.h2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.h2'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.h2'
                                                 );
        }
        if ('cim:GovHydroPelton.hn' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.hn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.hn'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.hn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.hn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.hn'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.hn'
                                                 );
        }
        if ('cim:GovHydroPelton.kc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.kc'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.kc'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.kc'
                                                 );
        }
        if ('cim:GovHydroPelton.kg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.kg'
                                                 );
        }
        if ('cim:GovHydroPelton.qc0' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.qc0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.qc0'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.qc0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.qc0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.qc0'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.qc0'
                                                 );
        }
        if ('cim:GovHydroPelton.qn' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.qn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.qn'],
                                                   'cim:VolumeFlowRate',
                                                   'cim:GovHydroPelton.qn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.qn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.qn'],
                                                   'cim:VolumeFlowRate',
                                                   'cim:GovHydroPelton.qn'
                                                 );
        }
        if ('cim:GovHydroPelton.simplifiedPelton' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.simplifiedPelton'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.simplifiedPelton'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPelton.simplifiedPelton'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.simplifiedPelton'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.simplifiedPelton'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPelton.simplifiedPelton'
                                                 );
        }
        if ('cim:GovHydroPelton.staticCompensating' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.staticCompensating'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.staticCompensating'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPelton.staticCompensating'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.staticCompensating'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.staticCompensating'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPelton.staticCompensating'
                                                 );
        }
        if ('cim:GovHydroPelton.ta' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.ta'
                                                 );
        }
        if ('cim:GovHydroPelton.ts' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.ts'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.ts'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.ts'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.ts'
                                                 );
        }
        if ('cim:GovHydroPelton.tv' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.tv'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.tv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.tv'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.tv'
                                                 );
        }
        if ('cim:GovHydroPelton.twnc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.twnc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.twnc'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.twnc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.twnc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.twnc'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.twnc'
                                                 );
        }
        if ('cim:GovHydroPelton.twng' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.twng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.twng'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.twng'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.twng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.twng'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.twng'
                                                 );
        }
        if ('cim:GovHydroPelton.tx' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.tx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.tx'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.tx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.tx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.tx'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPelton.tx'
                                                 );
        }
        if ('cim:GovHydroPelton.va' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.va'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.va'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPelton.va'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.va'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.va'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPelton.va'
                                                 );
        }
        if ('cim:GovHydroPelton.valvmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.valvmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.valvmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.valvmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.valvmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.valvmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.valvmax'
                                                 );
        }
        if ('cim:GovHydroPelton.valvmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.valvmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.valvmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.valvmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.valvmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.valvmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.valvmin'
                                                 );
        }
        if ('cim:GovHydroPelton.vav' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.vav'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.vav'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.vav'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.vav'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.vav'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.vav'
                                                 );
        }
        if ('cim:GovHydroPelton.vc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.vc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.vc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPelton.vc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.vc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.vc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPelton.vc'
                                                 );
        }
        if ('cim:GovHydroPelton.vcv' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.vcv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.vcv'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.vcv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.vcv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.vcv'],
                                                   'cim:PU',
                                                   'cim:GovHydroPelton.vcv'
                                                 );
        }
        if ('cim:GovHydroPelton.waterTunnelSurgeChamberSimulation' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.waterTunnelSurgeChamberSimulation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.waterTunnelSurgeChamberSimulation'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPelton.waterTunnelSurgeChamberSimulation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.waterTunnelSurgeChamberSimulation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.waterTunnelSurgeChamberSimulation'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPelton.waterTunnelSurgeChamberSimulation'
                                                 );
        }
        if ('cim:GovHydroPelton.zsfc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPelton.zsfc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.zsfc'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.zsfc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPelton.zsfc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPelton.zsfc'],
                                                   'cim:Length',
                                                   'cim:GovHydroPelton.zsfc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'av0': [CGMESProfile.shortNames.DY, ],
						'av1': [CGMESProfile.shortNames.DY, ],
						'bp': [CGMESProfile.shortNames.DY, ],
						'db1': [CGMESProfile.shortNames.DY, ],
						'db2': [CGMESProfile.shortNames.DY, ],
						'h1': [CGMESProfile.shortNames.DY, ],
						'h2': [CGMESProfile.shortNames.DY, ],
						'hn': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kg': [CGMESProfile.shortNames.DY, ],
						'qc0': [CGMESProfile.shortNames.DY, ],
						'qn': [CGMESProfile.shortNames.DY, ],
						'simplifiedPelton': [CGMESProfile.shortNames.DY, ],
						'staticCompensating': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'ts': [CGMESProfile.shortNames.DY, ],
						'tv': [CGMESProfile.shortNames.DY, ],
						'twnc': [CGMESProfile.shortNames.DY, ],
						'twng': [CGMESProfile.shortNames.DY, ],
						'tx': [CGMESProfile.shortNames.DY, ],
						'va': [CGMESProfile.shortNames.DY, ],
						'valvmax': [CGMESProfile.shortNames.DY, ],
						'valvmin': [CGMESProfile.shortNames.DY, ],
						'vav': [CGMESProfile.shortNames.DY, ],
						'vc': [CGMESProfile.shortNames.DY, ],
						'vcv': [CGMESProfile.shortNames.DY, ],
						'waterTunnelSurgeChamberSimulation': [CGMESProfile.shortNames.DY, ],
						'zsfc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroPelton.av0",
            "cim:GovHydroPelton.av1",
            "cim:GovHydroPelton.bp",
            "cim:GovHydroPelton.db1",
            "cim:GovHydroPelton.db2",
            "cim:GovHydroPelton.h1",
            "cim:GovHydroPelton.h2",
            "cim:GovHydroPelton.hn",
            "cim:GovHydroPelton.kc",
            "cim:GovHydroPelton.kg",
            "cim:GovHydroPelton.qc0",
            "cim:GovHydroPelton.qn",
            "cim:GovHydroPelton.simplifiedPelton",
            "cim:GovHydroPelton.staticCompensating",
            "cim:GovHydroPelton.ta",
            "cim:GovHydroPelton.ts",
            "cim:GovHydroPelton.tv",
            "cim:GovHydroPelton.twnc",
            "cim:GovHydroPelton.twng",
            "cim:GovHydroPelton.tx",
            "cim:GovHydroPelton.va",
            "cim:GovHydroPelton.valvmax",
            "cim:GovHydroPelton.valvmin",
            "cim:GovHydroPelton.vav",
            "cim:GovHydroPelton.vc",
            "cim:GovHydroPelton.vcv",
            "cim:GovHydroPelton.waterTunnelSurgeChamberSimulation",
            "cim:GovHydroPelton.zsfc",
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
            if (!GovHydroPelton.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovHydroPelton: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroPelton.attributeHTML(object, cimmenu);
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
export default GovHydroPelton
