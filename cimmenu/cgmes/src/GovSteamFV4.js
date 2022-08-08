import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteamFV4 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamFV4") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamFV4.kf1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kf1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kf1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kf1'
                                                 );
        }
        if ('cim:GovSteamFV4.kf3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kf3'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kf3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kf3'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kf3'
                                                 );
        }
        if ('cim:GovSteamFV4.lps' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.lps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.lps'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.lps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.lps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.lps'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.lps'
                                                 );
        }
        if ('cim:GovSteamFV4.lpi' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.lpi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.lpi'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.lpi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.lpi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.lpi'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.lpi'
                                                 );
        }
        if ('cim:GovSteamFV4.mxef' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.mxef'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.mxef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.mxef'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.mxef'
                                                 );
        }
        if ('cim:GovSteamFV4.mnef' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.mnef'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.mnef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.mnef'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.mnef'
                                                 );
        }
        if ('cim:GovSteamFV4.crmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.crmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.crmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.crmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.crmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.crmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.crmx'
                                                 );
        }
        if ('cim:GovSteamFV4.crmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.crmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.crmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.crmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.crmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.crmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.crmn'
                                                 );
        }
        if ('cim:GovSteamFV4.kpt' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kpt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kpt'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kpt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kpt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kpt'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kpt'
                                                 );
        }
        if ('cim:GovSteamFV4.kit' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kit'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kit'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kit'
                                                 );
        }
        if ('cim:GovSteamFV4.rvgmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.rvgmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rvgmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rvgmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.rvgmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rvgmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rvgmx'
                                                 );
        }
        if ('cim:GovSteamFV4.rvgmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.rvgmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rvgmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rvgmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.rvgmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rvgmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rvgmn'
                                                 );
        }
        if ('cim:GovSteamFV4.svmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.svmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.svmx'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV4.svmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.svmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.svmx'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV4.svmx'
                                                 );
        }
        if ('cim:GovSteamFV4.svmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.svmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.svmn'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV4.svmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.svmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.svmn'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV4.svmn'
                                                 );
        }
        if ('cim:GovSteamFV4.srmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.srmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.srmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.srmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.srmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.srmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.srmx'
                                                 );
        }
        if ('cim:GovSteamFV4.srmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.srmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.srmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.srmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.srmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.srmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.srmn'
                                                 );
        }
        if ('cim:GovSteamFV4.kpp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kpp'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kpp'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kpp'
                                                 );
        }
        if ('cim:GovSteamFV4.kip' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kip'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kip'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kip'
                                                 );
        }
        if ('cim:GovSteamFV4.rsmimx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.rsmimx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rsmimx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rsmimx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.rsmimx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rsmimx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rsmimx'
                                                 );
        }
        if ('cim:GovSteamFV4.rsmimn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.rsmimn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rsmimn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rsmimn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.rsmimn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.rsmimn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.rsmimn'
                                                 );
        }
        if ('cim:GovSteamFV4.kmp1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kmp1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kmp1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kmp1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kmp1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kmp1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kmp1'
                                                 );
        }
        if ('cim:GovSteamFV4.kmp2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kmp2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kmp2'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kmp2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kmp2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kmp2'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kmp2'
                                                 );
        }
        if ('cim:GovSteamFV4.srsmp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.srsmp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.srsmp'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.srsmp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.srsmp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.srsmp'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.srsmp'
                                                 );
        }
        if ('cim:GovSteamFV4.ta' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.ta'
                                                 );
        }
        if ('cim:GovSteamFV4.tc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tc'
                                                 );
        }
        if ('cim:GovSteamFV4.ty' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.ty'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ty'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.ty'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.ty'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ty'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.ty'
                                                 );
        }
        if ('cim:GovSteamFV4.yhpmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.yhpmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.yhpmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.yhpmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.yhpmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.yhpmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.yhpmx'
                                                 );
        }
        if ('cim:GovSteamFV4.yhpmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.yhpmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.yhpmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.yhpmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.yhpmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.yhpmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.yhpmn'
                                                 );
        }
        if ('cim:GovSteamFV4.tam' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tam'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tam'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tam'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tam'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tam'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tam'
                                                 );
        }
        if ('cim:GovSteamFV4.tcm' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tcm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tcm'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tcm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tcm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tcm'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tcm'
                                                 );
        }
        if ('cim:GovSteamFV4.ympmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.ympmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ympmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.ympmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.ympmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ympmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.ympmx'
                                                 );
        }
        if ('cim:GovSteamFV4.ympmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.ympmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ympmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.ympmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.ympmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ympmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.ympmn'
                                                 );
        }
        if ('cim:GovSteamFV4.y' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.y'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.y'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.y'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.y'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.y'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.y'
                                                 );
        }
        if ('cim:GovSteamFV4.thp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.thp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.thp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.thp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.thp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.thp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.thp'
                                                 );
        }
        if ('cim:GovSteamFV4.trh' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.trh'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.trh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.trh'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.trh'
                                                 );
        }
        if ('cim:GovSteamFV4.tmp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tmp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tmp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tmp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tmp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tmp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tmp'
                                                 );
        }
        if ('cim:GovSteamFV4.khp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.khp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.khp'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.khp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.khp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.khp'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.khp'
                                                 );
        }
        if ('cim:GovSteamFV4.pr1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.pr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.pr1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.pr1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.pr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.pr1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.pr1'
                                                 );
        }
        if ('cim:GovSteamFV4.pr2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.pr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.pr2'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.pr2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.pr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.pr2'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.pr2'
                                                 );
        }
        if ('cim:GovSteamFV4.psmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.psmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.psmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.psmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.psmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.psmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.psmn'
                                                 );
        }
        if ('cim:GovSteamFV4.kpc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kpc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kpc'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kpc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kpc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kpc'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kpc'
                                                 );
        }
        if ('cim:GovSteamFV4.kic' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kic'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kic'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kic'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kic'
                                                 );
        }
        if ('cim:GovSteamFV4.kdc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.kdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kdc'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.kdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.kdc'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.kdc'
                                                 );
        }
        if ('cim:GovSteamFV4.tdc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tdc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tdc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tdc'
                                                 );
        }
        if ('cim:GovSteamFV4.cpsmx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.cpsmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.cpsmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.cpsmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.cpsmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.cpsmx'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.cpsmx'
                                                 );
        }
        if ('cim:GovSteamFV4.cpsmn' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.cpsmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.cpsmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.cpsmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.cpsmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.cpsmn'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.cpsmn'
                                                 );
        }
        if ('cim:GovSteamFV4.krc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.krc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.krc'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.krc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.krc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.krc'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.krc'
                                                 );
        }
        if ('cim:GovSteamFV4.tf1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tf1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tf1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tf1'
                                                 );
        }
        if ('cim:GovSteamFV4.tf2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tf2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tf2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tf2'
                                                 );
        }
        if ('cim:GovSteamFV4.tv' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tv'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.tv'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV4.tv'
                                                 );
        }
        if ('cim:GovSteamFV4.ksh' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV4.ksh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ksh'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.ksh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV4.ksh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV4.ksh'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV4.ksh'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kf1': [CGMESProfile.shortNames.DY, ],
						'kf3': [CGMESProfile.shortNames.DY, ],
						'lps': [CGMESProfile.shortNames.DY, ],
						'lpi': [CGMESProfile.shortNames.DY, ],
						'mxef': [CGMESProfile.shortNames.DY, ],
						'mnef': [CGMESProfile.shortNames.DY, ],
						'crmx': [CGMESProfile.shortNames.DY, ],
						'crmn': [CGMESProfile.shortNames.DY, ],
						'kpt': [CGMESProfile.shortNames.DY, ],
						'kit': [CGMESProfile.shortNames.DY, ],
						'rvgmx': [CGMESProfile.shortNames.DY, ],
						'rvgmn': [CGMESProfile.shortNames.DY, ],
						'svmx': [CGMESProfile.shortNames.DY, ],
						'svmn': [CGMESProfile.shortNames.DY, ],
						'srmx': [CGMESProfile.shortNames.DY, ],
						'srmn': [CGMESProfile.shortNames.DY, ],
						'kpp': [CGMESProfile.shortNames.DY, ],
						'kip': [CGMESProfile.shortNames.DY, ],
						'rsmimx': [CGMESProfile.shortNames.DY, ],
						'rsmimn': [CGMESProfile.shortNames.DY, ],
						'kmp1': [CGMESProfile.shortNames.DY, ],
						'kmp2': [CGMESProfile.shortNames.DY, ],
						'srsmp': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'ty': [CGMESProfile.shortNames.DY, ],
						'yhpmx': [CGMESProfile.shortNames.DY, ],
						'yhpmn': [CGMESProfile.shortNames.DY, ],
						'tam': [CGMESProfile.shortNames.DY, ],
						'tcm': [CGMESProfile.shortNames.DY, ],
						'ympmx': [CGMESProfile.shortNames.DY, ],
						'ympmn': [CGMESProfile.shortNames.DY, ],
						'y': [CGMESProfile.shortNames.DY, ],
						'thp': [CGMESProfile.shortNames.DY, ],
						'trh': [CGMESProfile.shortNames.DY, ],
						'tmp': [CGMESProfile.shortNames.DY, ],
						'khp': [CGMESProfile.shortNames.DY, ],
						'pr1': [CGMESProfile.shortNames.DY, ],
						'pr2': [CGMESProfile.shortNames.DY, ],
						'psmn': [CGMESProfile.shortNames.DY, ],
						'kpc': [CGMESProfile.shortNames.DY, ],
						'kic': [CGMESProfile.shortNames.DY, ],
						'kdc': [CGMESProfile.shortNames.DY, ],
						'tdc': [CGMESProfile.shortNames.DY, ],
						'cpsmx': [CGMESProfile.shortNames.DY, ],
						'cpsmn': [CGMESProfile.shortNames.DY, ],
						'krc': [CGMESProfile.shortNames.DY, ],
						'tf1': [CGMESProfile.shortNames.DY, ],
						'tf2': [CGMESProfile.shortNames.DY, ],
						'tv': [CGMESProfile.shortNames.DY, ],
						'ksh': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamFV4.kf1",
            "cim:GovSteamFV4.kf3",
            "cim:GovSteamFV4.lps",
            "cim:GovSteamFV4.lpi",
            "cim:GovSteamFV4.mxef",
            "cim:GovSteamFV4.mnef",
            "cim:GovSteamFV4.crmx",
            "cim:GovSteamFV4.crmn",
            "cim:GovSteamFV4.kpt",
            "cim:GovSteamFV4.kit",
            "cim:GovSteamFV4.rvgmx",
            "cim:GovSteamFV4.rvgmn",
            "cim:GovSteamFV4.svmx",
            "cim:GovSteamFV4.svmn",
            "cim:GovSteamFV4.srmx",
            "cim:GovSteamFV4.srmn",
            "cim:GovSteamFV4.kpp",
            "cim:GovSteamFV4.kip",
            "cim:GovSteamFV4.rsmimx",
            "cim:GovSteamFV4.rsmimn",
            "cim:GovSteamFV4.kmp1",
            "cim:GovSteamFV4.kmp2",
            "cim:GovSteamFV4.srsmp",
            "cim:GovSteamFV4.ta",
            "cim:GovSteamFV4.tc",
            "cim:GovSteamFV4.ty",
            "cim:GovSteamFV4.yhpmx",
            "cim:GovSteamFV4.yhpmn",
            "cim:GovSteamFV4.tam",
            "cim:GovSteamFV4.tcm",
            "cim:GovSteamFV4.ympmx",
            "cim:GovSteamFV4.ympmn",
            "cim:GovSteamFV4.y",
            "cim:GovSteamFV4.thp",
            "cim:GovSteamFV4.trh",
            "cim:GovSteamFV4.tmp",
            "cim:GovSteamFV4.khp",
            "cim:GovSteamFV4.pr1",
            "cim:GovSteamFV4.pr2",
            "cim:GovSteamFV4.psmn",
            "cim:GovSteamFV4.kpc",
            "cim:GovSteamFV4.kic",
            "cim:GovSteamFV4.kdc",
            "cim:GovSteamFV4.tdc",
            "cim:GovSteamFV4.cpsmx",
            "cim:GovSteamFV4.cpsmn",
            "cim:GovSteamFV4.krc",
            "cim:GovSteamFV4.tf1",
            "cim:GovSteamFV4.tf2",
            "cim:GovSteamFV4.tv",
            "cim:GovSteamFV4.ksh",
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
            if (!GovSteamFV4.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovSteamFV4: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamFV4.attributeHTML(object, cimmenu);
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
export default GovSteamFV4
