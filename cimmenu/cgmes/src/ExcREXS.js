import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcREXS extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcREXS") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcREXS.e1' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.e1'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.e1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.e1'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.e1'
                                                 );
        }
        if ('cim:ExcREXS.e2' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.e2'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.e2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.e2'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.e2'
                                                 );
        }
        if ('cim:ExcREXS.fbf' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.fbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.fbf'],
                                                   'cim:ExcREXSFeedbackSignalKind',
                                                   'cim:ExcREXS.fbf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.fbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.fbf'],
                                                   'cim:ExcREXSFeedbackSignalKind',
                                                   'cim:ExcREXS.fbf'
                                                 );
        }
        if ('cim:ExcREXS.flimf' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.flimf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.flimf'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.flimf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.flimf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.flimf'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.flimf'
                                                 );
        }
        if ('cim:ExcREXS.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kc'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kc'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kc'
                                                 );
        }
        if ('cim:ExcREXS.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kd'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kd'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kd'
                                                 );
        }
        if ('cim:ExcREXS.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.ke'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.ke'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.ke'
                                                 );
        }
        if ('cim:ExcREXS.kefd' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kefd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kefd'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kefd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kefd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kefd'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kefd'
                                                 );
        }
        if ('cim:ExcREXS.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kf'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kf'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.kf'
                                                 );
        }
        if ('cim:ExcREXS.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kh'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kh'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kh'
                                                 );
        }
        if ('cim:ExcREXS.kii' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kii'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kii'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kii'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kii'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kii'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kii'
                                                 );
        }
        if ('cim:ExcREXS.kip' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kip'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kip'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kip'
                                                 );
        }
        if ('cim:ExcREXS.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.ks'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.ks'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.ks'
                                                 );
        }
        if ('cim:ExcREXS.kvi' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kvi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kvi'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kvi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kvi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kvi'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kvi'
                                                 );
        }
        if ('cim:ExcREXS.kvp' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kvp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kvp'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kvp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kvp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kvp'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kvp'
                                                 );
        }
        if ('cim:ExcREXS.kvphz' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.kvphz'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kvphz'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kvphz'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.kvphz'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.kvphz'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.kvphz'
                                                 );
        }
        if ('cim:ExcREXS.nvphz' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.nvphz'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.nvphz'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.nvphz'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.nvphz'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.nvphz'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.nvphz'
                                                 );
        }
        if ('cim:ExcREXS.se1' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.se1'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.se1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.se1'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.se1'
                                                 );
        }
        if ('cim:ExcREXS.se2' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.se2'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.se2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.se2'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.se2'
                                                 );
        }
        if ('cim:ExcREXS.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.ta'
                                                 );
        }
        if ('cim:ExcREXS.tb1' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tb1'
                                                 );
        }
        if ('cim:ExcREXS.tb2' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tb2'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tb2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tb2'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tb2'
                                                 );
        }
        if ('cim:ExcREXS.tc1' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tc1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tc1'
                                                 );
        }
        if ('cim:ExcREXS.tc2' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tc2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tc2'
                                                 );
        }
        if ('cim:ExcREXS.te' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.te'
                                                 );
        }
        if ('cim:ExcREXS.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tf'
                                                 );
        }
        if ('cim:ExcREXS.tf1' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tf1'
                                                 );
        }
        if ('cim:ExcREXS.tf2' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tf2'
                                                 );
        }
        if ('cim:ExcREXS.tp' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tp'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.tp'],
                                                   'cim:Seconds',
                                                   'cim:ExcREXS.tp'
                                                 );
        }
        if ('cim:ExcREXS.vcmax' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.vcmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vcmax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vcmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.vcmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vcmax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vcmax'
                                                 );
        }
        if ('cim:ExcREXS.vfmax' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.vfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vfmax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vfmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.vfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vfmax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vfmax'
                                                 );
        }
        if ('cim:ExcREXS.vfmin' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.vfmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vfmin'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vfmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.vfmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vfmin'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vfmin'
                                                 );
        }
        if ('cim:ExcREXS.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vimax'
                                                 );
        }
        if ('cim:ExcREXS.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vrmax'
                                                 );
        }
        if ('cim:ExcREXS.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.vrmin'
                                                 );
        }
        if ('cim:ExcREXS.xc' in object) {
            attributeEntries['filledEntries']['cim:ExcREXS.xc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.xc'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.xc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcREXS.xc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcREXS.xc'],
                                                   'cim:PU',
                                                   'cim:ExcREXS.xc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'e1': [CGMESProfile.shortNames.DY, ],
						'e2': [CGMESProfile.shortNames.DY, ],
						'fbf': [CGMESProfile.shortNames.DY, ],
						'flimf': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'kefd': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'kh': [CGMESProfile.shortNames.DY, ],
						'kii': [CGMESProfile.shortNames.DY, ],
						'kip': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'kvi': [CGMESProfile.shortNames.DY, ],
						'kvp': [CGMESProfile.shortNames.DY, ],
						'kvphz': [CGMESProfile.shortNames.DY, ],
						'nvphz': [CGMESProfile.shortNames.DY, ],
						'se1': [CGMESProfile.shortNames.DY, ],
						'se2': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb1': [CGMESProfile.shortNames.DY, ],
						'tb2': [CGMESProfile.shortNames.DY, ],
						'tc1': [CGMESProfile.shortNames.DY, ],
						'tc2': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'tf1': [CGMESProfile.shortNames.DY, ],
						'tf2': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						'vcmax': [CGMESProfile.shortNames.DY, ],
						'vfmax': [CGMESProfile.shortNames.DY, ],
						'vfmin': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'xc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcREXS.e1",
            "cim:ExcREXS.e2",
            "cim:ExcREXS.fbf",
            "cim:ExcREXS.flimf",
            "cim:ExcREXS.kc",
            "cim:ExcREXS.kd",
            "cim:ExcREXS.ke",
            "cim:ExcREXS.kefd",
            "cim:ExcREXS.kf",
            "cim:ExcREXS.kh",
            "cim:ExcREXS.kii",
            "cim:ExcREXS.kip",
            "cim:ExcREXS.ks",
            "cim:ExcREXS.kvi",
            "cim:ExcREXS.kvp",
            "cim:ExcREXS.kvphz",
            "cim:ExcREXS.nvphz",
            "cim:ExcREXS.se1",
            "cim:ExcREXS.se2",
            "cim:ExcREXS.ta",
            "cim:ExcREXS.tb1",
            "cim:ExcREXS.tb2",
            "cim:ExcREXS.tc1",
            "cim:ExcREXS.tc2",
            "cim:ExcREXS.te",
            "cim:ExcREXS.tf",
            "cim:ExcREXS.tf1",
            "cim:ExcREXS.tf2",
            "cim:ExcREXS.tp",
            "cim:ExcREXS.vcmax",
            "cim:ExcREXS.vfmax",
            "cim:ExcREXS.vfmin",
            "cim:ExcREXS.vimax",
            "cim:ExcREXS.vrmax",
            "cim:ExcREXS.vrmin",
            "cim:ExcREXS.xc",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ExcitationSystemDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExcREXS.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcREXS: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcREXS.attributeHTML(object, cimmenu);
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
export default ExcREXS
