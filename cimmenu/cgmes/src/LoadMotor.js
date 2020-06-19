import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class LoadMotor extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="LoadMotor") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadMotor.LoadAggregate' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.LoadAggregate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.LoadAggregate'],
                                                   'cim:LoadAggregate',
                                                   'cim:LoadMotor.LoadAggregate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.LoadAggregate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.LoadAggregate'],
                                                   'cim:LoadAggregate',
                                                   'cim:LoadMotor.LoadAggregate'
                                                 );
        }
        if ('cim:LoadMotor.pfrac' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.pfrac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.pfrac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadMotor.pfrac'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.pfrac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.pfrac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadMotor.pfrac'
                                                 );
        }
        if ('cim:LoadMotor.lfac' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.lfac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.lfac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadMotor.lfac'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.lfac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.lfac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadMotor.lfac'
                                                 );
        }
        if ('cim:LoadMotor.ls' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.ls'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.ls'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.ls'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.ls'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.ls'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.ls'
                                                 );
        }
        if ('cim:LoadMotor.lp' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.lp'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.lp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.lp'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.lp'
                                                 );
        }
        if ('cim:LoadMotor.lpp' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.lpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.lpp'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.lpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.lpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.lpp'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.lpp'
                                                 );
        }
        if ('cim:LoadMotor.ra' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.ra'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.ra'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.ra'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.ra'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.ra'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.ra'
                                                 );
        }
        if ('cim:LoadMotor.tpo' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.tpo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tpo'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tpo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.tpo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tpo'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tpo'
                                                 );
        }
        if ('cim:LoadMotor.tppo' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.tppo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tppo'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tppo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.tppo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tppo'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tppo'
                                                 );
        }
        if ('cim:LoadMotor.h' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.h'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.h'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.h'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.h'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.h'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.h'
                                                 );
        }
        if ('cim:LoadMotor.d' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.d'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadMotor.d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.d'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadMotor.d'
                                                 );
        }
        if ('cim:LoadMotor.vt' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.vt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.vt'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.vt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.vt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.vt'],
                                                   'cim:PU',
                                                   'cim:LoadMotor.vt'
                                                 );
        }
        if ('cim:LoadMotor.tv' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tv'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tv'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tv'
                                                 );
        }
        if ('cim:LoadMotor.tbkr' in object) {
            attributeEntries['filledEntries']['cim:LoadMotor.tbkr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tbkr'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tbkr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadMotor.tbkr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadMotor.tbkr'],
                                                   'cim:Seconds',
                                                   'cim:LoadMotor.tbkr'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadMotor.LoadAggregate",
            "cim:LoadMotor.pfrac",
            "cim:LoadMotor.lfac",
            "cim:LoadMotor.ls",
            "cim:LoadMotor.lp",
            "cim:LoadMotor.lpp",
            "cim:LoadMotor.ra",
            "cim:LoadMotor.tpo",
            "cim:LoadMotor.tppo",
            "cim:LoadMotor.h",
            "cim:LoadMotor.d",
            "cim:LoadMotor.vt",
            "cim:LoadMotor.tv",
            "cim:LoadMotor.tbkr",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!LoadMotor.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadMotor: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadMotor.attributeHTML(object, cimmenu);
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
export default LoadMotor
