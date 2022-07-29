import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DynamicsVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="DynamicsVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:DynamicsVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.baseUML'
                                                 );
        }
        if ('cim:DynamicsVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.baseURI'
                                                 );
        }
        if ('cim:DynamicsVersion.date' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.date'],
                                                   'cim:Date',
                                                   'cim:DynamicsVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.date'],
                                                   'cim:Date',
                                                   'cim:DynamicsVersion.date'
                                                 );
        }
        if ('cim:DynamicsVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.differenceModelURI'
                                                 );
        }
        if ('cim:DynamicsVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.entsoeUML'
                                                 );
        }
        if ('cim:DynamicsVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.entsoeURI'
                                                 );
        }
        if ('cim:DynamicsVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:DynamicsVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.namespaceRDF'
                                                 );
        }
        if ('cim:DynamicsVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.namespaceUML'
                                                 );
        }
        if ('cim:DynamicsVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:DynamicsVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.shortName'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsVersion.shortName'],
                                                   'cim:String',
                                                   'cim:DynamicsVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'baseUML': [CGMESProfile.shortNames.DY, ],
						'baseURI': [CGMESProfile.shortNames.DY, ],
						'date': [CGMESProfile.shortNames.DY, ],
						'differenceModelURI': [CGMESProfile.shortNames.DY, ],
						'entsoeUML': [CGMESProfile.shortNames.DY, ],
						'entsoeURI': [CGMESProfile.shortNames.DY, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.DY, ],
						'namespaceRDF': [CGMESProfile.shortNames.DY, ],
						'namespaceUML': [CGMESProfile.shortNames.DY, ],
						'shortName': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DynamicsVersion.baseUML",
            "cim:DynamicsVersion.baseURI",
            "cim:DynamicsVersion.date",
            "cim:DynamicsVersion.differenceModelURI",
            "cim:DynamicsVersion.entsoeUML",
            "cim:DynamicsVersion.entsoeURI",
            "cim:DynamicsVersion.modelDescriptionURI",
            "cim:DynamicsVersion.namespaceRDF",
            "cim:DynamicsVersion.namespaceUML",
            "cim:DynamicsVersion.shortName",
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
            if (!DynamicsVersion.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DynamicsVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DynamicsVersion.attributeHTML(object, cimmenu);
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
export default DynamicsVersion
