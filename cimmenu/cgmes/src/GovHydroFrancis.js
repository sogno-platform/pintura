import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovHydroFrancis extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroFrancis") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroFrancis.am' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.am'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.am'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.am'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.am'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.am'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.am'
                                                 );
        }
        if ('cim:GovHydroFrancis.av0' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.av0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.av0'],
                                                   'cim:Area',
                                                   'cim:GovHydroFrancis.av0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.av0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.av0'],
                                                   'cim:Area',
                                                   'cim:GovHydroFrancis.av0'
                                                 );
        }
        if ('cim:GovHydroFrancis.av1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.av1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.av1'],
                                                   'cim:Area',
                                                   'cim:GovHydroFrancis.av1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.av1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.av1'],
                                                   'cim:Area',
                                                   'cim:GovHydroFrancis.av1'
                                                 );
        }
        if ('cim:GovHydroFrancis.bp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.bp'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.bp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.bp'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.bp'
                                                 );
        }
        if ('cim:GovHydroFrancis.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroFrancis.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroFrancis.db1'
                                                 );
        }
        if ('cim:GovHydroFrancis.etamax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.etamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.etamax'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.etamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.etamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.etamax'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.etamax'
                                                 );
        }
        if ('cim:GovHydroFrancis.governorControl' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.governorControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.governorControl'],
                                                   'cim:FrancisGovernorControlKind',
                                                   'cim:GovHydroFrancis.governorControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.governorControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.governorControl'],
                                                   'cim:FrancisGovernorControlKind',
                                                   'cim:GovHydroFrancis.governorControl'
                                                 );
        }
        if ('cim:GovHydroFrancis.h1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.h1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.h1'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.h1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.h1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.h1'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.h1'
                                                 );
        }
        if ('cim:GovHydroFrancis.h2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.h2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.h2'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.h2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.h2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.h2'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.h2'
                                                 );
        }
        if ('cim:GovHydroFrancis.hn' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.hn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.hn'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.hn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.hn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.hn'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.hn'
                                                 );
        }
        if ('cim:GovHydroFrancis.kc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.kc'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.kc'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.kc'
                                                 );
        }
        if ('cim:GovHydroFrancis.kg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.kg'
                                                 );
        }
        if ('cim:GovHydroFrancis.kt' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.kt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.kt'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.kt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.kt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.kt'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.kt'
                                                 );
        }
        if ('cim:GovHydroFrancis.qc0' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.qc0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.qc0'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.qc0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.qc0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.qc0'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.qc0'
                                                 );
        }
        if ('cim:GovHydroFrancis.qn' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.qn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.qn'],
                                                   'cim:VolumeFlowRate',
                                                   'cim:GovHydroFrancis.qn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.qn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.qn'],
                                                   'cim:VolumeFlowRate',
                                                   'cim:GovHydroFrancis.qn'
                                                 );
        }
        if ('cim:GovHydroFrancis.ta' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.ta'
                                                 );
        }
        if ('cim:GovHydroFrancis.td' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.td'
                                                 );
        }
        if ('cim:GovHydroFrancis.ts' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.ts'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.ts'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.ts'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.ts'
                                                 );
        }
        if ('cim:GovHydroFrancis.twnc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.twnc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.twnc'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.twnc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.twnc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.twnc'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.twnc'
                                                 );
        }
        if ('cim:GovHydroFrancis.twng' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.twng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.twng'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.twng'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.twng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.twng'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.twng'
                                                 );
        }
        if ('cim:GovHydroFrancis.tx' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.tx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.tx'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.tx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.tx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.tx'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroFrancis.tx'
                                                 );
        }
        if ('cim:GovHydroFrancis.va' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.va'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.va'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroFrancis.va'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.va'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.va'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroFrancis.va'
                                                 );
        }
        if ('cim:GovHydroFrancis.valvmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.valvmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.valvmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.valvmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.valvmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.valvmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.valvmax'
                                                 );
        }
        if ('cim:GovHydroFrancis.valvmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.valvmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.valvmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.valvmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.valvmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.valvmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroFrancis.valvmin'
                                                 );
        }
        if ('cim:GovHydroFrancis.vc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.vc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.vc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroFrancis.vc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.vc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.vc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroFrancis.vc'
                                                 );
        }
        if ('cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.waterTunnelSurgeChamberSimulation'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.waterTunnelSurgeChamberSimulation'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation'
                                                 );
        }
        if ('cim:GovHydroFrancis.zsfc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroFrancis.zsfc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.zsfc'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.zsfc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroFrancis.zsfc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroFrancis.zsfc'],
                                                   'cim:Length',
                                                   'cim:GovHydroFrancis.zsfc'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroFrancis.am",
            "cim:GovHydroFrancis.av0",
            "cim:GovHydroFrancis.av1",
            "cim:GovHydroFrancis.bp",
            "cim:GovHydroFrancis.db1",
            "cim:GovHydroFrancis.etamax",
            "cim:GovHydroFrancis.governorControl",
            "cim:GovHydroFrancis.h1",
            "cim:GovHydroFrancis.h2",
            "cim:GovHydroFrancis.hn",
            "cim:GovHydroFrancis.kc",
            "cim:GovHydroFrancis.kg",
            "cim:GovHydroFrancis.kt",
            "cim:GovHydroFrancis.qc0",
            "cim:GovHydroFrancis.qn",
            "cim:GovHydroFrancis.ta",
            "cim:GovHydroFrancis.td",
            "cim:GovHydroFrancis.ts",
            "cim:GovHydroFrancis.twnc",
            "cim:GovHydroFrancis.twng",
            "cim:GovHydroFrancis.tx",
            "cim:GovHydroFrancis.va",
            "cim:GovHydroFrancis.valvmax",
            "cim:GovHydroFrancis.valvmin",
            "cim:GovHydroFrancis.vc",
            "cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation",
            "cim:GovHydroFrancis.zsfc",
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
            if (!GovHydroFrancis.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroFrancis: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroFrancis.attributeHTML(object, cimmenu);
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
export default GovHydroFrancis
