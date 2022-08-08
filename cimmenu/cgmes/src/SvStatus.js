import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SvStatus extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SvStatus") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SvStatus.ConductingEquipment' in object) {
            attributeEntries['filledEntries']['cim:SvStatus.ConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvStatus.ConductingEquipment'],
                                                   'cim:ConductingEquipment',
                                                   'cim:SvStatus.ConductingEquipment'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvStatus.ConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvStatus.ConductingEquipment'],
                                                   'cim:ConductingEquipment',
                                                   'cim:SvStatus.ConductingEquipment'
                                                 );
        }
        if ('cim:SvStatus.inService' in object) {
            attributeEntries['filledEntries']['cim:SvStatus.inService'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvStatus.inService'],
                                                   'cim:Boolean',
                                                   'cim:SvStatus.inService'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvStatus.inService'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvStatus.inService'],
                                                   'cim:Boolean',
                                                   'cim:SvStatus.inService'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'ConductingEquipment': [CGMESProfile.shortNames.SV, ],
						'inService': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SvStatus.ConductingEquipment",
            "cim:SvStatus.inService",
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
            if (!SvStatus.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SvStatus: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SvStatus.attributeHTML(object, cimmenu);
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
export default SvStatus
