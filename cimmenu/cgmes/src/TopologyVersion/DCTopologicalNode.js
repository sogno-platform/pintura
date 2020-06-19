
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:DCTopologicalNode.DCTerminals' in object) {
        console.log(object['cim:DCTopologicalNode.DCTerminals'])
        attributeEntries['cim:DCTopologicalNode.DCTerminals'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:DCTopologicalNode.DCTerminals'], 'cim:DCBaseTerminal', 'cim:DCTopologicalNode.DCTerminals');
    }
    if ('cim:DCTopologicalNode.DCEquipmentContainer' in object) {
        console.log(object['cim:DCTopologicalNode.DCEquipmentContainer'])
        attributeEntries['cim:DCTopologicalNode.DCEquipmentContainer'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:DCTopologicalNode.DCEquipmentContainer'], 'cim:DCEquipmentContainer', 'cim:DCTopologicalNode.DCEquipmentContainer');
    }
    if ('cim:DCTopologicalNode.DCNodes' in object) {
        console.log(object['cim:DCTopologicalNode.DCNodes'])
        attributeEntries['cim:DCTopologicalNode.DCNodes'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:DCTopologicalNode.DCNodes'], 'cim:DCNode', 'cim:DCTopologicalNode.DCNodes');
    }
    if ('cim:IdentifiedObject.description' in object) {
        console.log(object['cim:IdentifiedObject.description'])
        attributeEntries['cim:IdentifiedObject.description'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.description'], 'cim:String', 'cim:IdentifiedObject.description');
    }
    if ('cim:IdentifiedObject.energyIdentCodeEic' in object) {
        console.log(object['cim:IdentifiedObject.energyIdentCodeEic'])
        attributeEntries['cim:IdentifiedObject.energyIdentCodeEic'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.energyIdentCodeEic'], 'cim:String', 'cim:IdentifiedObject.energyIdentCodeEic');
    }
    if ('cim:IdentifiedObject.mRID' in object) {
        console.log(object['cim:IdentifiedObject.mRID'])
        attributeEntries['cim:IdentifiedObject.mRID'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.mRID'], 'cim:String', 'cim:IdentifiedObject.mRID');
    }
    if ('cim:IdentifiedObject.name' in object) {
        console.log(object['cim:IdentifiedObject.name'])
        attributeEntries['cim:IdentifiedObject.name'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.name'], 'cim:String', 'cim:IdentifiedObject.name');
    }
    if ('cim:IdentifiedObject.shortName' in object) {
        console.log(object['cim:IdentifiedObject.shortName'])
        attributeEntries['cim:IdentifiedObject.shortName'] = cimmenu.getAggregateComponentMenu("cim:DCTopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.shortName'], 'cim:String', 'cim:IdentifiedObject.shortName');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }