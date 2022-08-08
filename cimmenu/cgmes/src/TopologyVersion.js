import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TopologyVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="TopologyVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:TopologyVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.baseUML'
                                                 );
        }
        if ('cim:TopologyVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.baseURI'
                                                 );
        }
        if ('cim:TopologyVersion.date' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.date'],
                                                   'cim:Date',
                                                   'cim:TopologyVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.date'],
                                                   'cim:Date',
                                                   'cim:TopologyVersion.date'
                                                 );
        }
        if ('cim:TopologyVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.differenceModelURI'
                                                 );
        }
        if ('cim:TopologyVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.entsoeUML'
                                                 );
        }
        if ('cim:TopologyVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.entsoeURI'
                                                 );
        }
        if ('cim:TopologyVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:TopologyVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.namespaceRDF'
                                                 );
        }
        if ('cim:TopologyVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.namespaceUML'
                                                 );
        }
        if ('cim:TopologyVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:TopologyVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.shortName'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyVersion.shortName'],
                                                   'cim:String',
                                                   'cim:TopologyVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.TP, ],
						'baseUML': [CGMESProfile.shortNames.TP, ],
						'baseURI': [CGMESProfile.shortNames.TP, ],
						'date': [CGMESProfile.shortNames.TP, ],
						'differenceModelURI': [CGMESProfile.shortNames.TP, ],
						'entsoeUML': [CGMESProfile.shortNames.TP, ],
						'entsoeURI': [CGMESProfile.shortNames.TP, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.TP, ],
						'namespaceRDF': [CGMESProfile.shortNames.TP, ],
						'namespaceUML': [CGMESProfile.shortNames.TP, ],
						'shortName': [CGMESProfile.shortNames.TP, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TopologyVersion.baseUML",
            "cim:TopologyVersion.baseURI",
            "cim:TopologyVersion.date",
            "cim:TopologyVersion.differenceModelURI",
            "cim:TopologyVersion.entsoeUML",
            "cim:TopologyVersion.entsoeURI",
            "cim:TopologyVersion.modelDescriptionURI",
            "cim:TopologyVersion.namespaceRDF",
            "cim:TopologyVersion.namespaceUML",
            "cim:TopologyVersion.shortName",
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
            if (!TopologyVersion.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TopologyVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TopologyVersion.attributeHTML(object, cimmenu);
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
export default TopologyVersion
