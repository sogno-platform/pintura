import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TopologyBoundaryVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="TopologyBoundaryVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:TopologyBoundaryVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.baseUML'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.baseURI'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.date' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.date'],
                                                   'cim:Date',
                                                   'cim:TopologyBoundaryVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.date'],
                                                   'cim:Date',
                                                   'cim:TopologyBoundaryVersion.date'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.differenceModelURI'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.entsoeUML'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.entsoeURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.entsoeURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.entsoeURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.entsoeURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.entsoeURI'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.namespaceRDF'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.namespaceUML'
                                                 );
        }
        if ('cim:TopologyBoundaryVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:TopologyBoundaryVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.shortName'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologyBoundaryVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologyBoundaryVersion.shortName'],
                                                   'cim:String',
                                                   'cim:TopologyBoundaryVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.TP_BD, ],
						'baseUML': [CGMESProfile.shortNames.TP_BD, ],
						'baseURI': [CGMESProfile.shortNames.TP_BD, ],
						'date': [CGMESProfile.shortNames.TP_BD, ],
						'differenceModelURI': [CGMESProfile.shortNames.TP_BD, ],
						'entsoeUML': [CGMESProfile.shortNames.TP_BD, ],
						'entsoeURI': [CGMESProfile.shortNames.TP_BD, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.TP_BD, ],
						'namespaceRDF': [CGMESProfile.shortNames.TP_BD, ],
						'namespaceUML': [CGMESProfile.shortNames.TP_BD, ],
						'shortName': [CGMESProfile.shortNames.TP_BD, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TopologyBoundaryVersion.baseUML",
            "cim:TopologyBoundaryVersion.baseURI",
            "cim:TopologyBoundaryVersion.date",
            "cim:TopologyBoundaryVersion.differenceModelURI",
            "cim:TopologyBoundaryVersion.entsoeUML",
            "cim:TopologyBoundaryVersion.entsoeURI",
            "cim:TopologyBoundaryVersion.modelDescriptionURI",
            "cim:TopologyBoundaryVersion.namespaceRDF",
            "cim:TopologyBoundaryVersion.namespaceUML",
            "cim:TopologyBoundaryVersion.shortName",
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
            if (!TopologyBoundaryVersion.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TopologyBoundaryVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TopologyBoundaryVersion.attributeHTML(object, cimmenu);
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
export default TopologyBoundaryVersion
