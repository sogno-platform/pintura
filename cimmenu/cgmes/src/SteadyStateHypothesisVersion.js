import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SteadyStateHypothesisVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SteadyStateHypothesisVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SteadyStateHypothesisVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.baseUML'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.baseURI'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.date' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.date'],
                                                   'cim:Date',
                                                   'cim:SteadyStateHypothesisVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.date'],
                                                   'cim:Date',
                                                   'cim:SteadyStateHypothesisVersion.date'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.differenceModelURI'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.entsoeUML'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.entsoeURI'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.namespaceRDF'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.namespaceUML'
                                                 );
        }
        if ('cim:SteadyStateHypothesisVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:SteadyStateHypothesisVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.shortName'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SteadyStateHypothesisVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SteadyStateHypothesisVersion.shortName'],
                                                   'cim:String',
                                                   'cim:SteadyStateHypothesisVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SSH, ],
						'baseUML': [CGMESProfile.shortNames.SSH, ],
						'baseURI': [CGMESProfile.shortNames.SSH, ],
						'date': [CGMESProfile.shortNames.SSH, ],
						'differenceModelURI': [CGMESProfile.shortNames.SSH, ],
						'entsoeUML': [CGMESProfile.shortNames.SSH, ],
						'entsoeURI': [CGMESProfile.shortNames.SSH, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.SSH, ],
						'namespaceRDF': [CGMESProfile.shortNames.SSH, ],
						'namespaceUML': [CGMESProfile.shortNames.SSH, ],
						'shortName': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SteadyStateHypothesisVersion.baseUML",
            "cim:SteadyStateHypothesisVersion.baseURI",
            "cim:SteadyStateHypothesisVersion.date",
            "cim:SteadyStateHypothesisVersion.differenceModelURI",
            "cim:SteadyStateHypothesisVersion.entsoeUML",
            "cim:SteadyStateHypothesisVersion.entsoeURI",
            "cim:SteadyStateHypothesisVersion.modelDescriptionURI",
            "cim:SteadyStateHypothesisVersion.namespaceRDF",
            "cim:SteadyStateHypothesisVersion.namespaceUML",
            "cim:SteadyStateHypothesisVersion.shortName",
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
            if (!SteadyStateHypothesisVersion.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SteadyStateHypothesisVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SteadyStateHypothesisVersion.attributeHTML(object, cimmenu);
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
export default SteadyStateHypothesisVersion
