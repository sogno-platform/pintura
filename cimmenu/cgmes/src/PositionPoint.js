import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PositionPoint extends BaseClass {

    static attributeHTML(object, cimmenu, classType="PositionPoint") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:PositionPoint.Location' in object) {
            attributeEntries['filledEntries']['cim:PositionPoint.Location'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.Location'],
                                                   'cim:Location',
                                                   'cim:PositionPoint.Location'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PositionPoint.Location'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.Location'],
                                                   'cim:Location',
                                                   'cim:PositionPoint.Location'
                                                 );
        }
        if ('cim:PositionPoint.sequenceNumber' in object) {
            attributeEntries['filledEntries']['cim:PositionPoint.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:PositionPoint.sequenceNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PositionPoint.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:PositionPoint.sequenceNumber'
                                                 );
        }
        if ('cim:PositionPoint.xPosition' in object) {
            attributeEntries['filledEntries']['cim:PositionPoint.xPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.xPosition'],
                                                   'cim:String',
                                                   'cim:PositionPoint.xPosition'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PositionPoint.xPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.xPosition'],
                                                   'cim:String',
                                                   'cim:PositionPoint.xPosition'
                                                 );
        }
        if ('cim:PositionPoint.yPosition' in object) {
            attributeEntries['filledEntries']['cim:PositionPoint.yPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.yPosition'],
                                                   'cim:String',
                                                   'cim:PositionPoint.yPosition'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PositionPoint.yPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.yPosition'],
                                                   'cim:String',
                                                   'cim:PositionPoint.yPosition'
                                                 );
        }
        if ('cim:PositionPoint.zPosition' in object) {
            attributeEntries['filledEntries']['cim:PositionPoint.zPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.zPosition'],
                                                   'cim:String',
                                                   'cim:PositionPoint.zPosition'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PositionPoint.zPosition'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PositionPoint.zPosition'],
                                                   'cim:String',
                                                   'cim:PositionPoint.zPosition'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.GL, ],
						'Location': [CGMESProfile.shortNames.GL, ],
						'sequenceNumber': [CGMESProfile.shortNames.GL, ],
						'xPosition': [CGMESProfile.shortNames.GL, ],
						'yPosition': [CGMESProfile.shortNames.GL, ],
						'zPosition': [CGMESProfile.shortNames.GL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PositionPoint.Location",
            "cim:PositionPoint.sequenceNumber",
            "cim:PositionPoint.xPosition",
            "cim:PositionPoint.yPosition",
            "cim:PositionPoint.zPosition",
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
            if (!PositionPoint.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PositionPoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PositionPoint.attributeHTML(object, cimmenu);
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
export default PositionPoint
