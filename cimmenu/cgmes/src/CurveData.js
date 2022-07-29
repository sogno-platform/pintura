import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class CurveData extends BaseClass {

    static attributeHTML(object, cimmenu, classType="CurveData") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:CurveData.Curve' in object) {
            attributeEntries['filledEntries']['cim:CurveData.Curve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.Curve'],
                                                   'cim:Curve',
                                                   'cim:CurveData.Curve'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurveData.Curve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.Curve'],
                                                   'cim:Curve',
                                                   'cim:CurveData.Curve'
                                                 );
        }
        if ('cim:CurveData.xvalue' in object) {
            attributeEntries['filledEntries']['cim:CurveData.xvalue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.xvalue'],
                                                   'cim:Simple_Float',
                                                   'cim:CurveData.xvalue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurveData.xvalue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.xvalue'],
                                                   'cim:Simple_Float',
                                                   'cim:CurveData.xvalue'
                                                 );
        }
        if ('cim:CurveData.y1value' in object) {
            attributeEntries['filledEntries']['cim:CurveData.y1value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.y1value'],
                                                   'cim:Simple_Float',
                                                   'cim:CurveData.y1value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurveData.y1value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.y1value'],
                                                   'cim:Simple_Float',
                                                   'cim:CurveData.y1value'
                                                 );
        }
        if ('cim:CurveData.y2value' in object) {
            attributeEntries['filledEntries']['cim:CurveData.y2value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.y2value'],
                                                   'cim:Simple_Float',
                                                   'cim:CurveData.y2value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurveData.y2value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurveData.y2value'],
                                                   'cim:Simple_Float',
                                                   'cim:CurveData.y2value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'Curve': [CGMESProfile.shortNames.EQ, ],
						'xvalue': [CGMESProfile.shortNames.EQ, ],
						'y1value': [CGMESProfile.shortNames.EQ, ],
						'y2value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:CurveData.Curve",
            "cim:CurveData.xvalue",
            "cim:CurveData.y1value",
            "cim:CurveData.y2value",
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
            if (!CurveData.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class CurveData: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = CurveData.attributeHTML(object, cimmenu);
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
export default CurveData
