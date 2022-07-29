import templates from "../../templates/index.js"
import Curve from "./Curve.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ReactiveCapabilityCurve extends Curve {

    static attributeHTML(object, cimmenu, classType="ReactiveCapabilityCurve") {
        let attributeEntries = Curve.attributeHTML(object, cimmenu, classType);
        if ('cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines' in object) {
            attributeEntries['filledEntries']['cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines'],
                                                   'cim:SynchronousMachine',
                                                   'cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines'],
                                                   'cim:SynchronousMachine',
                                                   'cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'InitiallyUsedBySynchronousMachines': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines",
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
            if (!ReactiveCapabilityCurve.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ReactiveCapabilityCurve: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ReactiveCapabilityCurve.attributeHTML(object, cimmenu);
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
export default ReactiveCapabilityCurve
