import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DiagramLayoutVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="DiagramLayoutVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:DiagramLayoutVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.baseUML'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.baseURI'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.date' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.date'],
                                                   'cim:Date',
                                                   'cim:DiagramLayoutVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.date'],
                                                   'cim:Date',
                                                   'cim:DiagramLayoutVersion.date'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.differenceModelURI'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.entsoeUML'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.entsoeURI'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.namespaceRDF'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.namespaceUML'
                                                 );
        }
        if ('cim:DiagramLayoutVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:DiagramLayoutVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.shortName'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramLayoutVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramLayoutVersion.shortName'],
                                                   'cim:String',
                                                   'cim:DiagramLayoutVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DL, ],
						'baseUML': [CGMESProfile.shortNames.DL, ],
						'baseURI': [CGMESProfile.shortNames.DL, ],
						'date': [CGMESProfile.shortNames.DL, ],
						'differenceModelURI': [CGMESProfile.shortNames.DL, ],
						'entsoeUML': [CGMESProfile.shortNames.DL, ],
						'entsoeURI': [CGMESProfile.shortNames.DL, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.DL, ],
						'namespaceRDF': [CGMESProfile.shortNames.DL, ],
						'namespaceUML': [CGMESProfile.shortNames.DL, ],
						'shortName': [CGMESProfile.shortNames.DL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiagramLayoutVersion.baseUML",
            "cim:DiagramLayoutVersion.baseURI",
            "cim:DiagramLayoutVersion.date",
            "cim:DiagramLayoutVersion.differenceModelURI",
            "cim:DiagramLayoutVersion.entsoeUML",
            "cim:DiagramLayoutVersion.entsoeURI",
            "cim:DiagramLayoutVersion.modelDescriptionURI",
            "cim:DiagramLayoutVersion.namespaceRDF",
            "cim:DiagramLayoutVersion.namespaceUML",
            "cim:DiagramLayoutVersion.shortName",
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
            if (!DiagramLayoutVersion.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiagramLayoutVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiagramLayoutVersion.attributeHTML(object, cimmenu);
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
export default DiagramLayoutVersion
