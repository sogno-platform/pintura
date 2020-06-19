import templates from "../../templates/index.js"
import DiscontinuousExcitationControlDynamics from "./DiscontinuousExcitationControlDynamics.js"
import common from "../../src/common.js"

class DiscExcContIEEEDEC2A extends DiscontinuousExcitationControlDynamics {

    static attributeHTML(object, cimmenu, classType="DiscExcContIEEEDEC2A") {
        let attributeEntries = DiscontinuousExcitationControlDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:DiscExcContIEEEDEC2A.vk' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC2A.vk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.vk'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC2A.vk'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC2A.vk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.vk'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC2A.vk'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC2A.td1' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC2A.td1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.td1'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC2A.td1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC2A.td1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.td1'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC2A.td1'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC2A.td2' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC2A.td2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.td2'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC2A.td2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC2A.td2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.td2'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC2A.td2'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC2A.vdmin' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC2A.vdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.vdmin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC2A.vdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC2A.vdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.vdmin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC2A.vdmin'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC2A.vdmax' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC2A.vdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.vdmax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC2A.vdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC2A.vdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC2A.vdmax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC2A.vdmax'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiscExcContIEEEDEC2A.vk",
            "cim:DiscExcContIEEEDEC2A.td1",
            "cim:DiscExcContIEEEDEC2A.td2",
            "cim:DiscExcContIEEEDEC2A.vdmin",
            "cim:DiscExcContIEEEDEC2A.vdmax",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DiscontinuousExcitationControlDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DiscExcContIEEEDEC2A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiscExcContIEEEDEC2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiscExcContIEEEDEC2A.attributeHTML(object, cimmenu);
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
export default DiscExcContIEEEDEC2A
