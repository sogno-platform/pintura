import templates from "../../templates/index.js"
import AsynchronousMachineDynamics from "./AsynchronousMachineDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AsynchronousMachineTimeConstantReactance extends AsynchronousMachineDynamics {

    static attributeHTML(object, cimmenu, classType="AsynchronousMachineTimeConstantReactance") {
        let attributeEntries = AsynchronousMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:AsynchronousMachineTimeConstantReactance.xs' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineTimeConstantReactance.xs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.xs'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineTimeConstantReactance.xs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineTimeConstantReactance.xs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.xs'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineTimeConstantReactance.xs'
                                                 );
        }
        if ('cim:AsynchronousMachineTimeConstantReactance.xp' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineTimeConstantReactance.xp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.xp'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineTimeConstantReactance.xp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineTimeConstantReactance.xp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.xp'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineTimeConstantReactance.xp'
                                                 );
        }
        if ('cim:AsynchronousMachineTimeConstantReactance.xpp' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineTimeConstantReactance.xpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.xpp'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineTimeConstantReactance.xpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineTimeConstantReactance.xpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.xpp'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineTimeConstantReactance.xpp'
                                                 );
        }
        if ('cim:AsynchronousMachineTimeConstantReactance.tpo' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineTimeConstantReactance.tpo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.tpo'],
                                                   'cim:Seconds',
                                                   'cim:AsynchronousMachineTimeConstantReactance.tpo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineTimeConstantReactance.tpo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.tpo'],
                                                   'cim:Seconds',
                                                   'cim:AsynchronousMachineTimeConstantReactance.tpo'
                                                 );
        }
        if ('cim:AsynchronousMachineTimeConstantReactance.tppo' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineTimeConstantReactance.tppo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.tppo'],
                                                   'cim:Seconds',
                                                   'cim:AsynchronousMachineTimeConstantReactance.tppo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineTimeConstantReactance.tppo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineTimeConstantReactance.tppo'],
                                                   'cim:Seconds',
                                                   'cim:AsynchronousMachineTimeConstantReactance.tppo'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'xs': [CGMESProfile.shortNames.DY, ],
						'xp': [CGMESProfile.shortNames.DY, ],
						'xpp': [CGMESProfile.shortNames.DY, ],
						'tpo': [CGMESProfile.shortNames.DY, ],
						'tppo': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AsynchronousMachineTimeConstantReactance.xs",
            "cim:AsynchronousMachineTimeConstantReactance.xp",
            "cim:AsynchronousMachineTimeConstantReactance.xpp",
            "cim:AsynchronousMachineTimeConstantReactance.tpo",
            "cim:AsynchronousMachineTimeConstantReactance.tppo",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( AsynchronousMachineDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AsynchronousMachineTimeConstantReactance.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AsynchronousMachineTimeConstantReactance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AsynchronousMachineTimeConstantReactance.attributeHTML(object, cimmenu);
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
export default AsynchronousMachineTimeConstantReactance
