import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcELIN2 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcELIN2") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcELIN2.k1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k1'
                                                 );
        }
        if ('cim:ExcELIN2.k1ec' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.k1ec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k1ec'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k1ec'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.k1ec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k1ec'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k1ec'
                                                 );
        }
        if ('cim:ExcELIN2.kd1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.kd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.kd1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.kd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.kd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.kd1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.kd1'
                                                 );
        }
        if ('cim:ExcELIN2.tb1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.tb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.tb1'
                                                 );
        }
        if ('cim:ExcELIN2.pid1max' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.pid1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.pid1max'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.pid1max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.pid1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.pid1max'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.pid1max'
                                                 );
        }
        if ('cim:ExcELIN2.ti1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ti1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ti1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ti1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ti1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ti1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ti1'
                                                 );
        }
        if ('cim:ExcELIN2.iefmax2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.iefmax2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.iefmax2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.iefmax2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.iefmax2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.iefmax2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.iefmax2'
                                                 );
        }
        if ('cim:ExcELIN2.k2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k2'
                                                 );
        }
        if ('cim:ExcELIN2.ketb' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ketb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ketb'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ketb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ketb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ketb'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ketb'
                                                 );
        }
        if ('cim:ExcELIN2.upmax' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.upmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.upmax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.upmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.upmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.upmax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.upmax'
                                                 );
        }
        if ('cim:ExcELIN2.upmin' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.upmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.upmin'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.upmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.upmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.upmin'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.upmin'
                                                 );
        }
        if ('cim:ExcELIN2.te' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.te'
                                                 );
        }
        if ('cim:ExcELIN2.xp' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.xp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.xp'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.xp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.xp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.xp'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.xp'
                                                 );
        }
        if ('cim:ExcELIN2.te2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.te2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.te2'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.te2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.te2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.te2'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.te2'
                                                 );
        }
        if ('cim:ExcELIN2.ke2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ke2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ke2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ke2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ke2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ke2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ke2'
                                                 );
        }
        if ('cim:ExcELIN2.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ve1'
                                                 );
        }
        if ('cim:ExcELIN2.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.seve1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.seve1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.seve1'
                                                 );
        }
        if ('cim:ExcELIN2.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.ve2'
                                                 );
        }
        if ('cim:ExcELIN2.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.seve2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.seve2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.seve2'
                                                 );
        }
        if ('cim:ExcELIN2.tr4' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.tr4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.tr4'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.tr4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.tr4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.tr4'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.tr4'
                                                 );
        }
        if ('cim:ExcELIN2.k3' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k3'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k3'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k3'
                                                 );
        }
        if ('cim:ExcELIN2.ti3' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ti3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ti3'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.ti3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ti3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ti3'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.ti3'
                                                 );
        }
        if ('cim:ExcELIN2.k4' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k4'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.k4'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.k4'
                                                 );
        }
        if ('cim:ExcELIN2.ti4' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.ti4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ti4'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.ti4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.ti4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.ti4'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN2.ti4'
                                                 );
        }
        if ('cim:ExcELIN2.iefmax' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.iefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.iefmax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.iefmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.iefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.iefmax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.iefmax'
                                                 );
        }
        if ('cim:ExcELIN2.iefmin' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.iefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.iefmin'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.iefmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.iefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.iefmin'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.iefmin'
                                                 );
        }
        if ('cim:ExcELIN2.efdbas' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN2.efdbas'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.efdbas'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.efdbas'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN2.efdbas'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN2.efdbas'],
                                                   'cim:PU',
                                                   'cim:ExcELIN2.efdbas'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'k1ec': [CGMESProfile.shortNames.DY, ],
						'kd1': [CGMESProfile.shortNames.DY, ],
						'tb1': [CGMESProfile.shortNames.DY, ],
						'pid1max': [CGMESProfile.shortNames.DY, ],
						'ti1': [CGMESProfile.shortNames.DY, ],
						'iefmax2': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						'ketb': [CGMESProfile.shortNames.DY, ],
						'upmax': [CGMESProfile.shortNames.DY, ],
						'upmin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'xp': [CGMESProfile.shortNames.DY, ],
						'te2': [CGMESProfile.shortNames.DY, ],
						'ke2': [CGMESProfile.shortNames.DY, ],
						've1': [CGMESProfile.shortNames.DY, ],
						'seve1': [CGMESProfile.shortNames.DY, ],
						've2': [CGMESProfile.shortNames.DY, ],
						'seve2': [CGMESProfile.shortNames.DY, ],
						'tr4': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						'ti3': [CGMESProfile.shortNames.DY, ],
						'k4': [CGMESProfile.shortNames.DY, ],
						'ti4': [CGMESProfile.shortNames.DY, ],
						'iefmax': [CGMESProfile.shortNames.DY, ],
						'iefmin': [CGMESProfile.shortNames.DY, ],
						'efdbas': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcELIN2.k1",
            "cim:ExcELIN2.k1ec",
            "cim:ExcELIN2.kd1",
            "cim:ExcELIN2.tb1",
            "cim:ExcELIN2.pid1max",
            "cim:ExcELIN2.ti1",
            "cim:ExcELIN2.iefmax2",
            "cim:ExcELIN2.k2",
            "cim:ExcELIN2.ketb",
            "cim:ExcELIN2.upmax",
            "cim:ExcELIN2.upmin",
            "cim:ExcELIN2.te",
            "cim:ExcELIN2.xp",
            "cim:ExcELIN2.te2",
            "cim:ExcELIN2.ke2",
            "cim:ExcELIN2.ve1",
            "cim:ExcELIN2.seve1",
            "cim:ExcELIN2.ve2",
            "cim:ExcELIN2.seve2",
            "cim:ExcELIN2.tr4",
            "cim:ExcELIN2.k3",
            "cim:ExcELIN2.ti3",
            "cim:ExcELIN2.k4",
            "cim:ExcELIN2.ti4",
            "cim:ExcELIN2.iefmax",
            "cim:ExcELIN2.iefmin",
            "cim:ExcELIN2.efdbas",
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
            if (!ExcELIN2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcELIN2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcELIN2.attributeHTML(object, cimmenu);
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
export default ExcELIN2
