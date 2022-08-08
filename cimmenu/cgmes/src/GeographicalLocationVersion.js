import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GeographicalLocationVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="GeographicalLocationVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:GeographicalLocationVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.baseUML'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.baseURI'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.date' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.date'],
                                                   'cim:Date',
                                                   'cim:GeographicalLocationVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.date'],
                                                   'cim:Date',
                                                   'cim:GeographicalLocationVersion.date'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.differenceModelURI'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.entsoeUML'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.entsoeURI'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.namespaceRDF'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.namespaceUML'
                                                 );
        }
        if ('cim:GeographicalLocationVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:GeographicalLocationVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.shortName'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeographicalLocationVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeographicalLocationVersion.shortName'],
                                                   'cim:String',
                                                   'cim:GeographicalLocationVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.GL, ],
						'baseUML': [CGMESProfile.shortNames.GL, ],
						'baseURI': [CGMESProfile.shortNames.GL, ],
						'date': [CGMESProfile.shortNames.GL, ],
						'differenceModelURI': [CGMESProfile.shortNames.GL, ],
						'entsoeUML': [CGMESProfile.shortNames.GL, ],
						'entsoeURI': [CGMESProfile.shortNames.GL, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.GL, ],
						'namespaceRDF': [CGMESProfile.shortNames.GL, ],
						'namespaceUML': [CGMESProfile.shortNames.GL, ],
						'shortName': [CGMESProfile.shortNames.GL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GeographicalLocationVersion.baseUML",
            "cim:GeographicalLocationVersion.baseURI",
            "cim:GeographicalLocationVersion.date",
            "cim:GeographicalLocationVersion.differenceModelURI",
            "cim:GeographicalLocationVersion.entsoeUML",
            "cim:GeographicalLocationVersion.entsoeURI",
            "cim:GeographicalLocationVersion.modelDescriptionURI",
            "cim:GeographicalLocationVersion.namespaceRDF",
            "cim:GeographicalLocationVersion.namespaceUML",
            "cim:GeographicalLocationVersion.shortName",
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
            if (!GeographicalLocationVersion.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GeographicalLocationVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GeographicalLocationVersion.attributeHTML(object, cimmenu);
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
export default GeographicalLocationVersion
