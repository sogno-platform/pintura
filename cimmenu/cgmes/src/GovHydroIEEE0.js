import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovHydroIEEE0 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroIEEE0") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroIEEE0.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroIEEE0.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroIEEE0.mwbase'
                                                 );
        }
        if ('cim:GovHydroIEEE0.k' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.k'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE0.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.k'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE0.k'
                                                 );
        }
        if ('cim:GovHydroIEEE0.t1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t1'
                                                 );
        }
        if ('cim:GovHydroIEEE0.t2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t2'
                                                 );
        }
        if ('cim:GovHydroIEEE0.t3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t3'
                                                 );
        }
        if ('cim:GovHydroIEEE0.t4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE0.t4'
                                                 );
        }
        if ('cim:GovHydroIEEE0.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE0.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE0.pmax'
                                                 );
        }
        if ('cim:GovHydroIEEE0.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE0.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE0.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE0.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE0.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE0.pmin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroIEEE0.mwbase",
            "cim:GovHydroIEEE0.k",
            "cim:GovHydroIEEE0.t1",
            "cim:GovHydroIEEE0.t2",
            "cim:GovHydroIEEE0.t3",
            "cim:GovHydroIEEE0.t4",
            "cim:GovHydroIEEE0.pmax",
            "cim:GovHydroIEEE0.pmin",
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
            if (!GovHydroIEEE0.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroIEEE0: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroIEEE0.attributeHTML(object, cimmenu);
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
export default GovHydroIEEE0
