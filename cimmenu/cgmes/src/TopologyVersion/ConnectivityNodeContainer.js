
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:ConnectivityNodeContainer.TopologicalNode' in object) {
        console.log(object['cim:ConnectivityNodeContainer.TopologicalNode'])
        attributeEntries['cim:ConnectivityNodeContainer.TopologicalNode'] = cimmenu.getAggregateComponentMenu("cim:ConnectivityNodeContainer", object['pintura:rdfid'], object['cim:ConnectivityNodeContainer.TopologicalNode'], 'cim:TopologicalNode', 'cim:ConnectivityNodeContainer.TopologicalNode');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }