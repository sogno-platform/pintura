
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:TopologicalNode.BaseVoltage' in object) {
        console.log(object['cim:TopologicalNode.BaseVoltage'])
        attributeEntries['cim:TopologicalNode.BaseVoltage'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:TopologicalNode.BaseVoltage'], 'cim:BaseVoltage', 'cim:TopologicalNode.BaseVoltage');
    }
    if ('cim:TopologicalNode.ConnectivityNodes' in object) {
        console.log(object['cim:TopologicalNode.ConnectivityNodes'])
        attributeEntries['cim:TopologicalNode.ConnectivityNodes'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:TopologicalNode.ConnectivityNodes'], 'cim:ConnectivityNode', 'cim:TopologicalNode.ConnectivityNodes');
    }
    if ('cim:TopologicalNode.ConnectivityNodeContainer' in object) {
        console.log(object['cim:TopologicalNode.ConnectivityNodeContainer'])
        attributeEntries['cim:TopologicalNode.ConnectivityNodeContainer'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:TopologicalNode.ConnectivityNodeContainer'], 'cim:ConnectivityNodeContainer', 'cim:TopologicalNode.ConnectivityNodeContainer');
    }
    if ('cim:TopologicalNode.ReportingGroup' in object) {
        console.log(object['cim:TopologicalNode.ReportingGroup'])
        attributeEntries['cim:TopologicalNode.ReportingGroup'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:TopologicalNode.ReportingGroup'], 'cim:ReportingGroup', 'cim:TopologicalNode.ReportingGroup');
    }
    if ('cim:TopologicalNode.Terminal' in object) {
        console.log(object['cim:TopologicalNode.Terminal'])
        attributeEntries['cim:TopologicalNode.Terminal'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:TopologicalNode.Terminal'], 'cim:Terminal', 'cim:TopologicalNode.Terminal');
    }
    if ('cim:IdentifiedObject.description' in object) {
        console.log(object['cim:IdentifiedObject.description'])
        attributeEntries['cim:IdentifiedObject.description'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.description'], 'cim:String', 'cim:IdentifiedObject.description');
    }
    if ('cim:IdentifiedObject.energyIdentCodeEic' in object) {
        console.log(object['cim:IdentifiedObject.energyIdentCodeEic'])
        attributeEntries['cim:IdentifiedObject.energyIdentCodeEic'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.energyIdentCodeEic'], 'cim:String', 'cim:IdentifiedObject.energyIdentCodeEic');
    }
    if ('cim:IdentifiedObject.mRID' in object) {
        console.log(object['cim:IdentifiedObject.mRID'])
        attributeEntries['cim:IdentifiedObject.mRID'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.mRID'], 'cim:String', 'cim:IdentifiedObject.mRID');
    }
    if ('cim:IdentifiedObject.name' in object) {
        console.log(object['cim:IdentifiedObject.name'])
        attributeEntries['cim:IdentifiedObject.name'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.name'], 'cim:String', 'cim:IdentifiedObject.name');
    }
    if ('cim:IdentifiedObject.shortName' in object) {
        console.log(object['cim:IdentifiedObject.shortName'])
        attributeEntries['cim:IdentifiedObject.shortName'] = cimmenu.getAggregateComponentMenu("cim:TopologicalNode", object['pintura:rdfid'], object['cim:IdentifiedObject.shortName'], 'cim:String', 'cim:IdentifiedObject.shortName');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }