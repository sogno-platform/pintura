import templates from "../../templates/index.js"
import DCConductingEquipment from "./DCConductingEquipment.js"
import common from "../../src/common.js"

class DCSeriesDevice extends DCConductingEquipment {

    static attributeHTML(object, cimmenu, classType="DCSeriesDevice") {
        let attributeEntries = DCConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:DCSeriesDevice.inductance' in object) {
            attributeEntries['filledEntries']['cim:DCSeriesDevice.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCSeriesDevice.inductance'],
                                                   'cim:Inductance',
                                                   'cim:DCSeriesDevice.inductance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCSeriesDevice.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCSeriesDevice.inductance'],
                                                   'cim:Inductance',
                                                   'cim:DCSeriesDevice.inductance'
                                                 );
        }
        if ('cim:DCSeriesDevice.resistance' in object) {
            attributeEntries['filledEntries']['cim:DCSeriesDevice.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCSeriesDevice.resistance'],
                                                   'cim:Resistance',
                                                   'cim:DCSeriesDevice.resistance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCSeriesDevice.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCSeriesDevice.resistance'],
                                                   'cim:Resistance',
                                                   'cim:DCSeriesDevice.resistance'
                                                 );
        }
        if ('cim:DCSeriesDevice.ratedUdc' in object) {
            attributeEntries['filledEntries']['cim:DCSeriesDevice.ratedUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCSeriesDevice.ratedUdc'],
                                                   'cim:Voltage',
                                                   'cim:DCSeriesDevice.ratedUdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCSeriesDevice.ratedUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCSeriesDevice.ratedUdc'],
                                                   'cim:Voltage',
                                                   'cim:DCSeriesDevice.ratedUdc'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCSeriesDevice.inductance",
            "cim:DCSeriesDevice.resistance",
            "cim:DCSeriesDevice.ratedUdc",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DCConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCSeriesDevice.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCSeriesDevice: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCSeriesDevice.attributeHTML(object, cimmenu);
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
export default DCSeriesDevice
