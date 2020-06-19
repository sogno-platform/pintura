import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcAC8B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC8B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC8B.inlim' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.inlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.inlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.inlim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.inlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.inlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.inlim'
                                                 );
        }
        if ('cim:ExcAC8B.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ka'
                                                 );
        }
        if ('cim:ExcAC8B.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kc'
                                                 );
        }
        if ('cim:ExcAC8B.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kd'
                                                 );
        }
        if ('cim:ExcAC8B.kdr' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.kdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kdr'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.kdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kdr'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kdr'
                                                 );
        }
        if ('cim:ExcAC8B.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ke'
                                                 );
        }
        if ('cim:ExcAC8B.kir' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kir'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kir'
                                                 );
        }
        if ('cim:ExcAC8B.kpr' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kpr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.kpr'
                                                 );
        }
        if ('cim:ExcAC8B.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ks'
                                                 );
        }
        if ('cim:ExcAC8B.pidlim' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.pidlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.pidlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.pidlim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.pidlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.pidlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.pidlim'
                                                 );
        }
        if ('cim:ExcAC8B.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC8B.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC8B.seve1'
                                                 );
        }
        if ('cim:ExcAC8B.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC8B.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC8B.seve2'
                                                 );
        }
        if ('cim:ExcAC8B.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC8B.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC8B.ta'
                                                 );
        }
        if ('cim:ExcAC8B.tdr' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.tdr'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC8B.tdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.tdr'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC8B.tdr'
                                                 );
        }
        if ('cim:ExcAC8B.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC8B.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC8B.te'
                                                 );
        }
        if ('cim:ExcAC8B.telim' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.telim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.telim'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.telim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.telim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.telim'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.telim'
                                                 );
        }
        if ('cim:ExcAC8B.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ve1'
                                                 );
        }
        if ('cim:ExcAC8B.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.ve2'
                                                 );
        }
        if ('cim:ExcAC8B.vemin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vemin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vemin'
                                                 );
        }
        if ('cim:ExcAC8B.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vfemax'
                                                 );
        }
        if ('cim:ExcAC8B.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vimax'
                                                 );
        }
        if ('cim:ExcAC8B.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vimin'
                                                 );
        }
        if ('cim:ExcAC8B.vpidmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vpidmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vpidmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vpidmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vpidmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vpidmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vpidmax'
                                                 );
        }
        if ('cim:ExcAC8B.vpidmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vpidmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vpidmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vpidmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vpidmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vpidmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vpidmin'
                                                 );
        }
        if ('cim:ExcAC8B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vrmax'
                                                 );
        }
        if ('cim:ExcAC8B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC8B.vrmin'
                                                 );
        }
        if ('cim:ExcAC8B.vtmult' in object) {
            attributeEntries['filledEntries']['cim:ExcAC8B.vtmult'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vtmult'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.vtmult'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC8B.vtmult'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC8B.vtmult'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC8B.vtmult'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAC8B.inlim",
            "cim:ExcAC8B.ka",
            "cim:ExcAC8B.kc",
            "cim:ExcAC8B.kd",
            "cim:ExcAC8B.kdr",
            "cim:ExcAC8B.ke",
            "cim:ExcAC8B.kir",
            "cim:ExcAC8B.kpr",
            "cim:ExcAC8B.ks",
            "cim:ExcAC8B.pidlim",
            "cim:ExcAC8B.seve1",
            "cim:ExcAC8B.seve2",
            "cim:ExcAC8B.ta",
            "cim:ExcAC8B.tdr",
            "cim:ExcAC8B.te",
            "cim:ExcAC8B.telim",
            "cim:ExcAC8B.ve1",
            "cim:ExcAC8B.ve2",
            "cim:ExcAC8B.vemin",
            "cim:ExcAC8B.vfemax",
            "cim:ExcAC8B.vimax",
            "cim:ExcAC8B.vimin",
            "cim:ExcAC8B.vpidmax",
            "cim:ExcAC8B.vpidmin",
            "cim:ExcAC8B.vrmax",
            "cim:ExcAC8B.vrmin",
            "cim:ExcAC8B.vtmult",
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
            if (!ExcAC8B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAC8B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC8B.attributeHTML(object, cimmenu);
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
export default ExcAC8B
