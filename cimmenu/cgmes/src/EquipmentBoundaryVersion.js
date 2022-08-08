import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EquipmentBoundaryVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="EquipmentBoundaryVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:EquipmentBoundaryVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.baseUML'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.baseURI' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.baseURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.baseURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.baseURI'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.baseURI'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.date' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.date'],
                                                   'cim:Date',
                                                   'cim:EquipmentBoundaryVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.date'],
                                                   'cim:Date',
                                                   'cim:EquipmentBoundaryVersion.date'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.differenceModelURI'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.entsoeUML'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.entsoeURIcore' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.entsoeURIcore'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.entsoeURIcore'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.entsoeURIcore'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.entsoeURIcore'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.entsoeURIcore'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.entsoeURIcore'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.entsoeURIoperation' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.entsoeURIoperation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.entsoeURIoperation'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.entsoeURIoperation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.entsoeURIoperation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.entsoeURIoperation'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.entsoeURIoperation'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.namespaceRDF'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.namespaceUML'
                                                 );
        }
        if ('cim:EquipmentBoundaryVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:EquipmentBoundaryVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.shortName'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentBoundaryVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentBoundaryVersion.shortName'],
                                                   'cim:String',
                                                   'cim:EquipmentBoundaryVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ_BD, ],
						'baseUML': [CGMESProfile.shortNames.EQ_BD, ],
						'baseURI': [CGMESProfile.shortNames.EQ_BD, ],
						'date': [CGMESProfile.shortNames.EQ_BD, ],
						'differenceModelURI': [CGMESProfile.shortNames.EQ_BD, ],
						'entsoeUML': [CGMESProfile.shortNames.EQ_BD, ],
						'entsoeURIcore': [CGMESProfile.shortNames.EQ_BD, ],
						'entsoeURIoperation': [CGMESProfile.shortNames.EQ_BD, ],
						'modelDescriptionURI': [CGMESProfile.shortNames.EQ_BD, ],
						'namespaceRDF': [CGMESProfile.shortNames.EQ_BD, ],
						'namespaceUML': [CGMESProfile.shortNames.EQ_BD, ],
						'shortName': [CGMESProfile.shortNames.EQ_BD, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EquipmentBoundaryVersion.baseUML",
            "cim:EquipmentBoundaryVersion.baseURI",
            "cim:EquipmentBoundaryVersion.date",
            "cim:EquipmentBoundaryVersion.differenceModelURI",
            "cim:EquipmentBoundaryVersion.entsoeUML",
            "cim:EquipmentBoundaryVersion.entsoeURIcore",
            "cim:EquipmentBoundaryVersion.entsoeURIoperation",
            "cim:EquipmentBoundaryVersion.modelDescriptionURI",
            "cim:EquipmentBoundaryVersion.namespaceRDF",
            "cim:EquipmentBoundaryVersion.namespaceUML",
            "cim:EquipmentBoundaryVersion.shortName",
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
            if (!EquipmentBoundaryVersion.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class EquipmentBoundaryVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquipmentBoundaryVersion.attributeHTML(object, cimmenu);
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
export default EquipmentBoundaryVersion
