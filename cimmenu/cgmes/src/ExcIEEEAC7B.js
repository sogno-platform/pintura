import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEAC7B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC7B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC7B.kpr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kpr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kpr'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kir' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kir'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kir'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kdr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kdr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kdr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kdr'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.tdr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.tdr'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC7B.tdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.tdr'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC7B.tdr'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kpa' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kpa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kpa'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kia' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kia'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vamax'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vamin'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kp'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kl' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kl'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC7B.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC7B.te'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vfemax'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.vemin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vemin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.vemin'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kc'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kd'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kf1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kf1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kf1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kf1'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kf2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kf2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kf2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kf2'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.kf3' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.kf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kf3'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kf3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.kf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.kf3'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.kf3'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC7B.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC7B.tf'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.ve1'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC7B.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC7B.seve1'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC7B.ve2'
                                                 );
        }
        if ('cim:ExcIEEEAC7B.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC7B.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC7B.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC7B.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC7B.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC7B.seve2'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC7B.kpr",
            "cim:ExcIEEEAC7B.kir",
            "cim:ExcIEEEAC7B.kdr",
            "cim:ExcIEEEAC7B.tdr",
            "cim:ExcIEEEAC7B.vrmax",
            "cim:ExcIEEEAC7B.vrmin",
            "cim:ExcIEEEAC7B.kpa",
            "cim:ExcIEEEAC7B.kia",
            "cim:ExcIEEEAC7B.vamax",
            "cim:ExcIEEEAC7B.vamin",
            "cim:ExcIEEEAC7B.kp",
            "cim:ExcIEEEAC7B.kl",
            "cim:ExcIEEEAC7B.te",
            "cim:ExcIEEEAC7B.vfemax",
            "cim:ExcIEEEAC7B.vemin",
            "cim:ExcIEEEAC7B.ke",
            "cim:ExcIEEEAC7B.kc",
            "cim:ExcIEEEAC7B.kd",
            "cim:ExcIEEEAC7B.kf1",
            "cim:ExcIEEEAC7B.kf2",
            "cim:ExcIEEEAC7B.kf3",
            "cim:ExcIEEEAC7B.tf",
            "cim:ExcIEEEAC7B.ve1",
            "cim:ExcIEEEAC7B.seve1",
            "cim:ExcIEEEAC7B.ve2",
            "cim:ExcIEEEAC7B.seve2",
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
            if (!ExcIEEEAC7B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC7B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC7B.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC7B
