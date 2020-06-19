import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class SubGeographicalRegion extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="SubGeographicalRegion") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:SubGeographicalRegion.Region' in object) {
            attributeEntries['filledEntries']['cim:SubGeographicalRegion.Region'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SubGeographicalRegion.Region'],
                                                   'cim:GeographicalRegion',
                                                   'cim:SubGeographicalRegion.Region'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SubGeographicalRegion.Region'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SubGeographicalRegion.Region'],
                                                   'cim:GeographicalRegion',
                                                   'cim:SubGeographicalRegion.Region'
                                                 );
        }
        if ('cim:SubGeographicalRegion.Substations' in object) {
            attributeEntries['filledEntries']['cim:SubGeographicalRegion.Substations'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SubGeographicalRegion.Substations'],
                                                   'cim:Substation',
                                                   'cim:SubGeographicalRegion.Substations'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SubGeographicalRegion.Substations'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SubGeographicalRegion.Substations'],
                                                   'cim:Substation',
                                                   'cim:SubGeographicalRegion.Substations'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SubGeographicalRegion.Region",
            "cim:SubGeographicalRegion.Substations",
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
            if (!SubGeographicalRegion.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SubGeographicalRegion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SubGeographicalRegion.attributeHTML(object, cimmenu);
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
export default SubGeographicalRegion
