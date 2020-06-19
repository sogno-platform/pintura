
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:TopologyVersion.baseUML' in object) {
        console.log(object['cim:TopologyVersion.baseUML'])
        attributeEntries['cim:TopologyVersion.baseUML'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.baseUML'], 'cim:String', 'cim:TopologyVersion.baseUML');
    }
    if ('cim:TopologyVersion.baseURI' in object) {
        console.log(object['cim:TopologyVersion.baseURI'])
        attributeEntries['cim:TopologyVersion.baseURI'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.baseURI'], 'cim:String', 'cim:TopologyVersion.baseURI');
    }
    if ('cim:TopologyVersion.date' in object) {
        console.log(object['cim:TopologyVersion.date'])
        attributeEntries['cim:TopologyVersion.date'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.date'], 'cim:Date', 'cim:TopologyVersion.date');
    }
    if ('cim:TopologyVersion.differenceModelURI' in object) {
        console.log(object['cim:TopologyVersion.differenceModelURI'])
        attributeEntries['cim:TopologyVersion.differenceModelURI'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.differenceModelURI'], 'cim:String', 'cim:TopologyVersion.differenceModelURI');
    }
    if ('cim:TopologyVersion.entsoeUML' in object) {
        console.log(object['cim:TopologyVersion.entsoeUML'])
        attributeEntries['cim:TopologyVersion.entsoeUML'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.entsoeUML'], 'cim:String', 'cim:TopologyVersion.entsoeUML');
    }
    if ('cim:TopologyVersion.entsoeURI' in object) {
        console.log(object['cim:TopologyVersion.entsoeURI'])
        attributeEntries['cim:TopologyVersion.entsoeURI'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.entsoeURI'], 'cim:String', 'cim:TopologyVersion.entsoeURI');
    }
    if ('cim:TopologyVersion.modelDescriptionURI' in object) {
        console.log(object['cim:TopologyVersion.modelDescriptionURI'])
        attributeEntries['cim:TopologyVersion.modelDescriptionURI'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.modelDescriptionURI'], 'cim:String', 'cim:TopologyVersion.modelDescriptionURI');
    }
    if ('cim:TopologyVersion.namespaceRDF' in object) {
        console.log(object['cim:TopologyVersion.namespaceRDF'])
        attributeEntries['cim:TopologyVersion.namespaceRDF'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.namespaceRDF'], 'cim:String', 'cim:TopologyVersion.namespaceRDF');
    }
    if ('cim:TopologyVersion.namespaceUML' in object) {
        console.log(object['cim:TopologyVersion.namespaceUML'])
        attributeEntries['cim:TopologyVersion.namespaceUML'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.namespaceUML'], 'cim:String', 'cim:TopologyVersion.namespaceUML');
    }
    if ('cim:TopologyVersion.shortName' in object) {
        console.log(object['cim:TopologyVersion.shortName'])
        attributeEntries['cim:TopologyVersion.shortName'] = cimmenu.getAggregateComponentMenu("cim:TopologyVersion", object['pintura:rdfid'], object['cim:TopologyVersion.shortName'], 'cim:String', 'cim:TopologyVersion.shortName');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }