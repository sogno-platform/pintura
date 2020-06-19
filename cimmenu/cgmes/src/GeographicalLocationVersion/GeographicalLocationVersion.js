
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:GeographicalLocationVersion.baseUML' in object) {
        console.log(object['cim:GeographicalLocationVersion.baseUML'])
        attributeEntries['cim:GeographicalLocationVersion.baseUML'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.baseUML'], 'cim:String', 'cim:GeographicalLocationVersion.baseUML');
    }
    if ('cim:GeographicalLocationVersion.baseURI' in object) {
        console.log(object['cim:GeographicalLocationVersion.baseURI'])
        attributeEntries['cim:GeographicalLocationVersion.baseURI'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.baseURI'], 'cim:String', 'cim:GeographicalLocationVersion.baseURI');
    }
    if ('cim:GeographicalLocationVersion.date' in object) {
        console.log(object['cim:GeographicalLocationVersion.date'])
        attributeEntries['cim:GeographicalLocationVersion.date'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.date'], 'cim:Date', 'cim:GeographicalLocationVersion.date');
    }
    if ('cim:GeographicalLocationVersion.differenceModelURI' in object) {
        console.log(object['cim:GeographicalLocationVersion.differenceModelURI'])
        attributeEntries['cim:GeographicalLocationVersion.differenceModelURI'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.differenceModelURI'], 'cim:String', 'cim:GeographicalLocationVersion.differenceModelURI');
    }
    if ('cim:GeographicalLocationVersion.entsoeUML' in object) {
        console.log(object['cim:GeographicalLocationVersion.entsoeUML'])
        attributeEntries['cim:GeographicalLocationVersion.entsoeUML'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.entsoeUML'], 'cim:String', 'cim:GeographicalLocationVersion.entsoeUML');
    }
    if ('cim:GeographicalLocationVersion.entsoeURI' in object) {
        console.log(object['cim:GeographicalLocationVersion.entsoeURI'])
        attributeEntries['cim:GeographicalLocationVersion.entsoeURI'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.entsoeURI'], 'cim:String', 'cim:GeographicalLocationVersion.entsoeURI');
    }
    if ('cim:GeographicalLocationVersion.modelDescriptionURI' in object) {
        console.log(object['cim:GeographicalLocationVersion.modelDescriptionURI'])
        attributeEntries['cim:GeographicalLocationVersion.modelDescriptionURI'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.modelDescriptionURI'], 'cim:String', 'cim:GeographicalLocationVersion.modelDescriptionURI');
    }
    if ('cim:GeographicalLocationVersion.namespaceRDF' in object) {
        console.log(object['cim:GeographicalLocationVersion.namespaceRDF'])
        attributeEntries['cim:GeographicalLocationVersion.namespaceRDF'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.namespaceRDF'], 'cim:String', 'cim:GeographicalLocationVersion.namespaceRDF');
    }
    if ('cim:GeographicalLocationVersion.namespaceUML' in object) {
        console.log(object['cim:GeographicalLocationVersion.namespaceUML'])
        attributeEntries['cim:GeographicalLocationVersion.namespaceUML'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.namespaceUML'], 'cim:String', 'cim:GeographicalLocationVersion.namespaceUML');
    }
    if ('cim:GeographicalLocationVersion.shortName' in object) {
        console.log(object['cim:GeographicalLocationVersion.shortName'])
        attributeEntries['cim:GeographicalLocationVersion.shortName'] = cimmenu.getAggregateComponentMenu("cim:GeographicalLocationVersion", object['pintura:rdfid'], object['cim:GeographicalLocationVersion.shortName'], 'cim:String', 'cim:GeographicalLocationVersion.shortName');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }