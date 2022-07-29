import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DiagramObjectPoint extends BaseClass {

    static attributeHTML(object, cimmenu, classType="DiagramObjectPoint") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:DiagramObjectPoint.DiagramObject' in object) {
            attributeEntries['filledEntries']['cim:DiagramObjectPoint.DiagramObject'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.DiagramObject'],
                                                   'cim:DiagramObject',
                                                   'cim:DiagramObjectPoint.DiagramObject'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObjectPoint.DiagramObject'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.DiagramObject'],
                                                   'cim:DiagramObject',
                                                   'cim:DiagramObjectPoint.DiagramObject'
                                                 );
        }
        if ('cim:DiagramObjectPoint.DiagramObjectGluePoint' in object) {
            attributeEntries['filledEntries']['cim:DiagramObjectPoint.DiagramObjectGluePoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.DiagramObjectGluePoint'],
                                                   'cim:DiagramObjectGluePoint',
                                                   'cim:DiagramObjectPoint.DiagramObjectGluePoint'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObjectPoint.DiagramObjectGluePoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.DiagramObjectGluePoint'],
                                                   'cim:DiagramObjectGluePoint',
                                                   'cim:DiagramObjectPoint.DiagramObjectGluePoint'
                                                 );
        }
        if ('cim:DiagramObjectPoint.sequenceNumber' in object) {
            attributeEntries['filledEntries']['cim:DiagramObjectPoint.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:DiagramObjectPoint.sequenceNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObjectPoint.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:DiagramObjectPoint.sequenceNumber'
                                                 );
        }
        if ('cim:DiagramObjectPoint.xPosition' in object) {
            attributeEntries['filledEntries']['cim:DiagramObjectPoint.xPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.xPosition'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObjectPoint.xPosition'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObjectPoint.xPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.xPosition'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObjectPoint.xPosition'
                                                 );
        }
        if ('cim:DiagramObjectPoint.yPosition' in object) {
            attributeEntries['filledEntries']['cim:DiagramObjectPoint.yPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.yPosition'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObjectPoint.yPosition'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObjectPoint.yPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.yPosition'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObjectPoint.yPosition'
                                                 );
        }
        if ('cim:DiagramObjectPoint.zPosition' in object) {
            attributeEntries['filledEntries']['cim:DiagramObjectPoint.zPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.zPosition'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObjectPoint.zPosition'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObjectPoint.zPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObjectPoint.zPosition'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObjectPoint.zPosition'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DL, ],
						'DiagramObject': [CGMESProfile.shortNames.DL, ],
						'DiagramObjectGluePoint': [CGMESProfile.shortNames.DL, ],
						'sequenceNumber': [CGMESProfile.shortNames.DL, ],
						'xPosition': [CGMESProfile.shortNames.DL, ],
						'yPosition': [CGMESProfile.shortNames.DL, ],
						'zPosition': [CGMESProfile.shortNames.DL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiagramObjectPoint.DiagramObject",
            "cim:DiagramObjectPoint.DiagramObjectGluePoint",
            "cim:DiagramObjectPoint.sequenceNumber",
            "cim:DiagramObjectPoint.xPosition",
            "cim:DiagramObjectPoint.yPosition",
            "cim:DiagramObjectPoint.zPosition",
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
            if (!DiagramObjectPoint.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiagramObjectPoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiagramObjectPoint.attributeHTML(object, cimmenu);
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
export default DiagramObjectPoint
