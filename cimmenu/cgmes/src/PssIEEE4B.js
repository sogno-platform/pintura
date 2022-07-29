import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssIEEE4B extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssIEEE4B") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssIEEE4B.bwh1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.bwh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwh1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwh1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.bwh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwh1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwh1'
                                                 );
        }
        if ('cim:PssIEEE4B.bwh2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.bwh2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwh2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwh2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.bwh2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwh2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwh2'
                                                 );
        }
        if ('cim:PssIEEE4B.bwl1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.bwl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwl1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.bwl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwl1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwl1'
                                                 );
        }
        if ('cim:PssIEEE4B.bwl2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.bwl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwl2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.bwl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.bwl2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.bwl2'
                                                 );
        }
        if ('cim:PssIEEE4B.kh' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh'
                                                 );
        }
        if ('cim:PssIEEE4B.kh1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh1'
                                                 );
        }
        if ('cim:PssIEEE4B.kh11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kh11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh11'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kh11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh11'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh11'
                                                 );
        }
        if ('cim:PssIEEE4B.kh17' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kh17'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh17'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh17'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kh17'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh17'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh17'
                                                 );
        }
        if ('cim:PssIEEE4B.kh2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kh2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kh2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kh2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kh2'
                                                 );
        }
        if ('cim:PssIEEE4B.ki' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki'
                                                 );
        }
        if ('cim:PssIEEE4B.ki1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ki1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ki1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki1'
                                                 );
        }
        if ('cim:PssIEEE4B.ki11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ki11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki11'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ki11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki11'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki11'
                                                 );
        }
        if ('cim:PssIEEE4B.ki17' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ki17'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki17'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki17'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ki17'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki17'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki17'
                                                 );
        }
        if ('cim:PssIEEE4B.ki2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ki2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ki2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ki2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.ki2'
                                                 );
        }
        if ('cim:PssIEEE4B.kl' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl'
                                                 );
        }
        if ('cim:PssIEEE4B.kl1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl1'
                                                 );
        }
        if ('cim:PssIEEE4B.kl11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kl11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl11'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kl11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl11'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl11'
                                                 );
        }
        if ('cim:PssIEEE4B.kl17' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kl17'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl17'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl17'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kl17'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl17'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl17'
                                                 );
        }
        if ('cim:PssIEEE4B.kl2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.kl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.kl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.kl2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.kl2'
                                                 );
        }
        if ('cim:PssIEEE4B.omeganh1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.omeganh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganh1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganh1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.omeganh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganh1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganh1'
                                                 );
        }
        if ('cim:PssIEEE4B.omeganh2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.omeganh2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganh2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganh2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.omeganh2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganh2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganh2'
                                                 );
        }
        if ('cim:PssIEEE4B.omeganl1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.omeganl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganl1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.omeganl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganl1'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganl1'
                                                 );
        }
        if ('cim:PssIEEE4B.omeganl2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.omeganl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganl2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.omeganl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.omeganl2'],
                                                   'cim:Simple_Float',
                                                   'cim:PssIEEE4B.omeganl2'
                                                 );
        }
        if ('cim:PssIEEE4B.th1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th1'
                                                 );
        }
        if ('cim:PssIEEE4B.th10' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th10'
                                                 );
        }
        if ('cim:PssIEEE4B.th11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th11'
                                                 );
        }
        if ('cim:PssIEEE4B.th12' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th12'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th12'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th12'
                                                 );
        }
        if ('cim:PssIEEE4B.th2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th2'
                                                 );
        }
        if ('cim:PssIEEE4B.th3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th3'
                                                 );
        }
        if ('cim:PssIEEE4B.th4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th4'
                                                 );
        }
        if ('cim:PssIEEE4B.th5' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th5'
                                                 );
        }
        if ('cim:PssIEEE4B.th6' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th6'
                                                 );
        }
        if ('cim:PssIEEE4B.th7' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th7'
                                                 );
        }
        if ('cim:PssIEEE4B.th8' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th8'
                                                 );
        }
        if ('cim:PssIEEE4B.th9' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.th9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.th9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.th9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.th9'
                                                 );
        }
        if ('cim:PssIEEE4B.ti1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti1'
                                                 );
        }
        if ('cim:PssIEEE4B.ti10' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti10'
                                                 );
        }
        if ('cim:PssIEEE4B.ti11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti11'
                                                 );
        }
        if ('cim:PssIEEE4B.ti12' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti12'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti12'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti12'
                                                 );
        }
        if ('cim:PssIEEE4B.ti2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti2'
                                                 );
        }
        if ('cim:PssIEEE4B.ti3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti3'
                                                 );
        }
        if ('cim:PssIEEE4B.ti4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti4'
                                                 );
        }
        if ('cim:PssIEEE4B.ti5' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti5'
                                                 );
        }
        if ('cim:PssIEEE4B.ti6' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti6'
                                                 );
        }
        if ('cim:PssIEEE4B.ti7' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti7'
                                                 );
        }
        if ('cim:PssIEEE4B.ti8' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti8'
                                                 );
        }
        if ('cim:PssIEEE4B.ti9' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.ti9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.ti9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.ti9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.ti9'
                                                 );
        }
        if ('cim:PssIEEE4B.tl1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl1'
                                                 );
        }
        if ('cim:PssIEEE4B.tl10' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl10'
                                                 );
        }
        if ('cim:PssIEEE4B.tl11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl11'
                                                 );
        }
        if ('cim:PssIEEE4B.tl12' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl12'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl12'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl12'
                                                 );
        }
        if ('cim:PssIEEE4B.tl2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl2'
                                                 );
        }
        if ('cim:PssIEEE4B.tl3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl3'
                                                 );
        }
        if ('cim:PssIEEE4B.tl4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl4'
                                                 );
        }
        if ('cim:PssIEEE4B.tl5' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl5'
                                                 );
        }
        if ('cim:PssIEEE4B.tl6' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl6'
                                                 );
        }
        if ('cim:PssIEEE4B.tl7' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl7'
                                                 );
        }
        if ('cim:PssIEEE4B.tl8' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl8'
                                                 );
        }
        if ('cim:PssIEEE4B.tl9' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.tl9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.tl9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.tl9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE4B.tl9'
                                                 );
        }
        if ('cim:PssIEEE4B.vhmax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vhmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vhmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vhmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vhmax'
                                                 );
        }
        if ('cim:PssIEEE4B.vhmin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vhmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vhmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vhmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vhmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vhmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vhmin'
                                                 );
        }
        if ('cim:PssIEEE4B.vimax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vimax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vimax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vimax'
                                                 );
        }
        if ('cim:PssIEEE4B.vimin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vimin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vimin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vimin'
                                                 );
        }
        if ('cim:PssIEEE4B.vlmax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vlmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vlmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vlmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vlmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vlmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vlmax'
                                                 );
        }
        if ('cim:PssIEEE4B.vlmin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vlmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vlmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vlmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vlmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vlmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vlmin'
                                                 );
        }
        if ('cim:PssIEEE4B.vstmax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vstmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vstmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vstmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vstmax'
                                                 );
        }
        if ('cim:PssIEEE4B.vstmin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE4B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vstmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vstmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE4B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE4B.vstmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE4B.vstmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'bwh1': [CGMESProfile.shortNames.DY, ],
						'bwh2': [CGMESProfile.shortNames.DY, ],
						'bwl1': [CGMESProfile.shortNames.DY, ],
						'bwl2': [CGMESProfile.shortNames.DY, ],
						'kh': [CGMESProfile.shortNames.DY, ],
						'kh1': [CGMESProfile.shortNames.DY, ],
						'kh11': [CGMESProfile.shortNames.DY, ],
						'kh17': [CGMESProfile.shortNames.DY, ],
						'kh2': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'ki1': [CGMESProfile.shortNames.DY, ],
						'ki11': [CGMESProfile.shortNames.DY, ],
						'ki17': [CGMESProfile.shortNames.DY, ],
						'ki2': [CGMESProfile.shortNames.DY, ],
						'kl': [CGMESProfile.shortNames.DY, ],
						'kl1': [CGMESProfile.shortNames.DY, ],
						'kl11': [CGMESProfile.shortNames.DY, ],
						'kl17': [CGMESProfile.shortNames.DY, ],
						'kl2': [CGMESProfile.shortNames.DY, ],
						'omeganh1': [CGMESProfile.shortNames.DY, ],
						'omeganh2': [CGMESProfile.shortNames.DY, ],
						'omeganl1': [CGMESProfile.shortNames.DY, ],
						'omeganl2': [CGMESProfile.shortNames.DY, ],
						'th1': [CGMESProfile.shortNames.DY, ],
						'th10': [CGMESProfile.shortNames.DY, ],
						'th11': [CGMESProfile.shortNames.DY, ],
						'th12': [CGMESProfile.shortNames.DY, ],
						'th2': [CGMESProfile.shortNames.DY, ],
						'th3': [CGMESProfile.shortNames.DY, ],
						'th4': [CGMESProfile.shortNames.DY, ],
						'th5': [CGMESProfile.shortNames.DY, ],
						'th6': [CGMESProfile.shortNames.DY, ],
						'th7': [CGMESProfile.shortNames.DY, ],
						'th8': [CGMESProfile.shortNames.DY, ],
						'th9': [CGMESProfile.shortNames.DY, ],
						'ti1': [CGMESProfile.shortNames.DY, ],
						'ti10': [CGMESProfile.shortNames.DY, ],
						'ti11': [CGMESProfile.shortNames.DY, ],
						'ti12': [CGMESProfile.shortNames.DY, ],
						'ti2': [CGMESProfile.shortNames.DY, ],
						'ti3': [CGMESProfile.shortNames.DY, ],
						'ti4': [CGMESProfile.shortNames.DY, ],
						'ti5': [CGMESProfile.shortNames.DY, ],
						'ti6': [CGMESProfile.shortNames.DY, ],
						'ti7': [CGMESProfile.shortNames.DY, ],
						'ti8': [CGMESProfile.shortNames.DY, ],
						'ti9': [CGMESProfile.shortNames.DY, ],
						'tl1': [CGMESProfile.shortNames.DY, ],
						'tl10': [CGMESProfile.shortNames.DY, ],
						'tl11': [CGMESProfile.shortNames.DY, ],
						'tl12': [CGMESProfile.shortNames.DY, ],
						'tl2': [CGMESProfile.shortNames.DY, ],
						'tl3': [CGMESProfile.shortNames.DY, ],
						'tl4': [CGMESProfile.shortNames.DY, ],
						'tl5': [CGMESProfile.shortNames.DY, ],
						'tl6': [CGMESProfile.shortNames.DY, ],
						'tl7': [CGMESProfile.shortNames.DY, ],
						'tl8': [CGMESProfile.shortNames.DY, ],
						'tl9': [CGMESProfile.shortNames.DY, ],
						'vhmax': [CGMESProfile.shortNames.DY, ],
						'vhmin': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vimin': [CGMESProfile.shortNames.DY, ],
						'vlmax': [CGMESProfile.shortNames.DY, ],
						'vlmin': [CGMESProfile.shortNames.DY, ],
						'vstmax': [CGMESProfile.shortNames.DY, ],
						'vstmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssIEEE4B.bwh1",
            "cim:PssIEEE4B.bwh2",
            "cim:PssIEEE4B.bwl1",
            "cim:PssIEEE4B.bwl2",
            "cim:PssIEEE4B.kh",
            "cim:PssIEEE4B.kh1",
            "cim:PssIEEE4B.kh11",
            "cim:PssIEEE4B.kh17",
            "cim:PssIEEE4B.kh2",
            "cim:PssIEEE4B.ki",
            "cim:PssIEEE4B.ki1",
            "cim:PssIEEE4B.ki11",
            "cim:PssIEEE4B.ki17",
            "cim:PssIEEE4B.ki2",
            "cim:PssIEEE4B.kl",
            "cim:PssIEEE4B.kl1",
            "cim:PssIEEE4B.kl11",
            "cim:PssIEEE4B.kl17",
            "cim:PssIEEE4B.kl2",
            "cim:PssIEEE4B.omeganh1",
            "cim:PssIEEE4B.omeganh2",
            "cim:PssIEEE4B.omeganl1",
            "cim:PssIEEE4B.omeganl2",
            "cim:PssIEEE4B.th1",
            "cim:PssIEEE4B.th10",
            "cim:PssIEEE4B.th11",
            "cim:PssIEEE4B.th12",
            "cim:PssIEEE4B.th2",
            "cim:PssIEEE4B.th3",
            "cim:PssIEEE4B.th4",
            "cim:PssIEEE4B.th5",
            "cim:PssIEEE4B.th6",
            "cim:PssIEEE4B.th7",
            "cim:PssIEEE4B.th8",
            "cim:PssIEEE4B.th9",
            "cim:PssIEEE4B.ti1",
            "cim:PssIEEE4B.ti10",
            "cim:PssIEEE4B.ti11",
            "cim:PssIEEE4B.ti12",
            "cim:PssIEEE4B.ti2",
            "cim:PssIEEE4B.ti3",
            "cim:PssIEEE4B.ti4",
            "cim:PssIEEE4B.ti5",
            "cim:PssIEEE4B.ti6",
            "cim:PssIEEE4B.ti7",
            "cim:PssIEEE4B.ti8",
            "cim:PssIEEE4B.ti9",
            "cim:PssIEEE4B.tl1",
            "cim:PssIEEE4B.tl10",
            "cim:PssIEEE4B.tl11",
            "cim:PssIEEE4B.tl12",
            "cim:PssIEEE4B.tl2",
            "cim:PssIEEE4B.tl3",
            "cim:PssIEEE4B.tl4",
            "cim:PssIEEE4B.tl5",
            "cim:PssIEEE4B.tl6",
            "cim:PssIEEE4B.tl7",
            "cim:PssIEEE4B.tl8",
            "cim:PssIEEE4B.tl9",
            "cim:PssIEEE4B.vhmax",
            "cim:PssIEEE4B.vhmin",
            "cim:PssIEEE4B.vimax",
            "cim:PssIEEE4B.vimin",
            "cim:PssIEEE4B.vlmax",
            "cim:PssIEEE4B.vlmin",
            "cim:PssIEEE4B.vstmax",
            "cim:PssIEEE4B.vstmin",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemStabilizerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PssIEEE4B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssIEEE4B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssIEEE4B.attributeHTML(object, cimmenu);
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
export default PssIEEE4B
