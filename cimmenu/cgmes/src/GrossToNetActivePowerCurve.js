import templates from "../../templates/index.js"
import Curve from "./Curve.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GrossToNetActivePowerCurve extends Curve {

    static attributeHTML(object, cimmenu, classType="GrossToNetActivePowerCurve") {
        let attributeEntries = Curve.attributeHTML(object, cimmenu, classType);
        if ('cim:GrossToNetActivePowerCurve.GeneratingUnit' in object) {
            attributeEntries['filledEntries']['cim:GrossToNetActivePowerCurve.GeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GrossToNetActivePowerCurve.GeneratingUnit'],
                                                   'cim:GeneratingUnit',
                                                   'cim:GrossToNetActivePowerCurve.GeneratingUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GrossToNetActivePowerCurve.GeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GrossToNetActivePowerCurve.GeneratingUnit'],
                                                   'cim:GeneratingUnit',
                                                   'cim:GrossToNetActivePowerCurve.GeneratingUnit'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'GeneratingUnit': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GrossToNetActivePowerCurve.GeneratingUnit",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Curve.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GrossToNetActivePowerCurve.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GrossToNetActivePowerCurve: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GrossToNetActivePowerCurve.attributeHTML(object, cimmenu);
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
export default GrossToNetActivePowerCurve
