import templates from "../../templates/index.js"
import LoadDynamics from "./LoadDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class LoadGenericNonLinear extends LoadDynamics {

    static attributeHTML(object, cimmenu, classType="LoadGenericNonLinear") {
        let attributeEntries = LoadDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadGenericNonLinear.genericNonLinearLoadModelType' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.genericNonLinearLoadModelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.genericNonLinearLoadModelType'],
                                                   'cim:GenericNonLinearLoadModelKind',
                                                   'cim:LoadGenericNonLinear.genericNonLinearLoadModelType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.genericNonLinearLoadModelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.genericNonLinearLoadModelType'],
                                                   'cim:GenericNonLinearLoadModelKind',
                                                   'cim:LoadGenericNonLinear.genericNonLinearLoadModelType'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.pt' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.pt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.pt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.pt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.pt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.pt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.pt'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.qt' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.qt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.qt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.qt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.qt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.qt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.qt'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.tp' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.tp'],
                                                   'cim:Seconds',
                                                   'cim:LoadGenericNonLinear.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.tp'],
                                                   'cim:Seconds',
                                                   'cim:LoadGenericNonLinear.tp'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.tq' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.tq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.tq'],
                                                   'cim:Seconds',
                                                   'cim:LoadGenericNonLinear.tq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.tq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.tq'],
                                                   'cim:Seconds',
                                                   'cim:LoadGenericNonLinear.tq'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.ls' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.ls'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.ls'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.ls'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.ls'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.ls'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.ls'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.lt' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.lt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.lt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.lt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.lt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.lt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.lt'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.bs' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.bs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.bs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.bs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.bs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.bs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.bs'
                                                 );
        }
        if ('cim:LoadGenericNonLinear.bt' in object) {
            attributeEntries['filledEntries']['cim:LoadGenericNonLinear.bt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.bt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.bt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGenericNonLinear.bt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGenericNonLinear.bt'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadGenericNonLinear.bt'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'genericNonLinearLoadModelType': [CGMESProfile.shortNames.DY, ],
						'pt': [CGMESProfile.shortNames.DY, ],
						'qt': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						'tq': [CGMESProfile.shortNames.DY, ],
						'ls': [CGMESProfile.shortNames.DY, ],
						'lt': [CGMESProfile.shortNames.DY, ],
						'bs': [CGMESProfile.shortNames.DY, ],
						'bt': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadGenericNonLinear.genericNonLinearLoadModelType",
            "cim:LoadGenericNonLinear.pt",
            "cim:LoadGenericNonLinear.qt",
            "cim:LoadGenericNonLinear.tp",
            "cim:LoadGenericNonLinear.tq",
            "cim:LoadGenericNonLinear.ls",
            "cim:LoadGenericNonLinear.lt",
            "cim:LoadGenericNonLinear.bs",
            "cim:LoadGenericNonLinear.bt",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( LoadDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!LoadGenericNonLinear.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadGenericNonLinear: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadGenericNonLinear.attributeHTML(object, cimmenu);
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
export default LoadGenericNonLinear
