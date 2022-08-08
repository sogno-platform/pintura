import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class StateVariablesVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="StateVariablesVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:StateVariablesVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.baseUML'
                                                 );
        }
        if ('cim:StateVariablesVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.baseURI'
                                                 );
        }
        if ('cim:StateVariablesVersion.date' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.date'],
                                                   'cim:Date',
                                                   'cim:StateVariablesVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.date'],
                                                   'cim:Date',
                                                   'cim:StateVariablesVersion.date'
                                                 );
        }
        if ('cim:StateVariablesVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.differenceModelURI'
                                                 );
        }
        if ('cim:StateVariablesVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.entsoeUML'
                                                 );
        }
        if ('cim:StateVariablesVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.entsoeURI'
                                                 );
        }
        if ('cim:StateVariablesVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:StateVariablesVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.namespaceRDF'
                                                 );
        }
        if ('cim:StateVariablesVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.namespaceUML'
                                                 );
        }
        if ('cim:StateVariablesVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:StateVariablesVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.shortName'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StateVariablesVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StateVariablesVersion.shortName'],
                                                   'cim:String',
                                                   'cim:StateVariablesVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'baseUML': [CGMESProfile.shortNames.SV, ],
						'baseURI': [CGMESProfile.shortNames.SV, ],
						'date': [CGMESProfile.shortNames.SV, ],
						'differenceModelURI': [CGMESProfile.shortNames.SV, ],
						'entsoeUML': [CGMESProfile.shortNames.SV, ],
						'entsoeURI': [CGMESProfile.shortNames.SV, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.SV, ],
						'namespaceRDF': [CGMESProfile.shortNames.SV, ],
						'namespaceUML': [CGMESProfile.shortNames.SV, ],
						'shortName': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:StateVariablesVersion.baseUML",
            "cim:StateVariablesVersion.baseURI",
            "cim:StateVariablesVersion.date",
            "cim:StateVariablesVersion.differenceModelURI",
            "cim:StateVariablesVersion.entsoeUML",
            "cim:StateVariablesVersion.entsoeURI",
            "cim:StateVariablesVersion.modelDescriptionURI",
            "cim:StateVariablesVersion.namespaceRDF",
            "cim:StateVariablesVersion.namespaceUML",
            "cim:StateVariablesVersion.shortName",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!StateVariablesVersion.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class StateVariablesVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = StateVariablesVersion.attributeHTML(object, cimmenu);
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
export default StateVariablesVersion
