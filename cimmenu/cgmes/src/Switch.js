import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Switch extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="Switch") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:Switch.normalOpen' in object) {
            attributeEntries['filledEntries']['cim:Switch.normalOpen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.normalOpen'],
                                                   'cim:Boolean',
                                                   'cim:Switch.normalOpen'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Switch.normalOpen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.normalOpen'],
                                                   'cim:Boolean',
                                                   'cim:Switch.normalOpen'
                                                 );
        }
        if ('cim:Switch.ratedCurrent' in object) {
            attributeEntries['filledEntries']['cim:Switch.ratedCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.ratedCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:Switch.ratedCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Switch.ratedCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.ratedCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:Switch.ratedCurrent'
                                                 );
        }
        if ('cim:Switch.retained' in object) {
            attributeEntries['filledEntries']['cim:Switch.retained'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.retained'],
                                                   'cim:Boolean',
                                                   'cim:Switch.retained'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Switch.retained'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.retained'],
                                                   'cim:Boolean',
                                                   'cim:Switch.retained'
                                                 );
        }
        if ('cim:Switch.open' in object) {
            attributeEntries['filledEntries']['cim:Switch.open'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.open'],
                                                   'cim:Boolean',
                                                   'cim:Switch.open'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Switch.open'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Switch.open'],
                                                   'cim:Boolean',
                                                   'cim:Switch.open'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'normalOpen': [CGMESProfile.shortNames.EQ, ],
						'ratedCurrent': [CGMESProfile.shortNames.EQ, ],
						'retained': [CGMESProfile.shortNames.EQ, ],
						'open': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Switch.normalOpen",
            "cim:Switch.ratedCurrent",
            "cim:Switch.retained",
            "cim:Switch.open",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Switch.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Switch: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Switch.attributeHTML(object, cimmenu);
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
        "Disconnector",
        "ProtectedSwitch",
        "Breaker",
        "LoadBreakSwitch",
        "GroundDisconnector",
        ];
        return subClasses;
    }
};
export default Switch
