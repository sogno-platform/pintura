import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class Curve extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="Curve") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:Curve.curveStyle' in object) {
            attributeEntries['filledEntries']['cim:Curve.curveStyle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.curveStyle'],
                                                   'cim:CurveStyle',
                                                   'cim:Curve.curveStyle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Curve.curveStyle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.curveStyle'],
                                                   'cim:CurveStyle',
                                                   'cim:Curve.curveStyle'
                                                 );
        }
        if ('cim:Curve.xUnit' in object) {
            attributeEntries['filledEntries']['cim:Curve.xUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.xUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Curve.xUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Curve.xUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.xUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Curve.xUnit'
                                                 );
        }
        if ('cim:Curve.y1Unit' in object) {
            attributeEntries['filledEntries']['cim:Curve.y1Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.y1Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Curve.y1Unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Curve.y1Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.y1Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Curve.y1Unit'
                                                 );
        }
        if ('cim:Curve.y2Unit' in object) {
            attributeEntries['filledEntries']['cim:Curve.y2Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.y2Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Curve.y2Unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Curve.y2Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Curve.y2Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Curve.y2Unit'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Curve.curveStyle",
            "cim:Curve.xUnit",
            "cim:Curve.y1Unit",
            "cim:Curve.y2Unit",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Curve.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Curve: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Curve.attributeHTML(object, cimmenu);
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
        "VsCapabilityCurve",
        "ReactiveCapabilityCurve",
        "GrossToNetActivePowerCurve",
        ];
        return subClasses;
    }
};
export default Curve
