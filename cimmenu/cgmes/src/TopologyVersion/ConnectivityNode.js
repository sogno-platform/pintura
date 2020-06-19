
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:ConnectivityNode.TopologicalNode' in object) {
        console.log(object['cim:ConnectivityNode.TopologicalNode'])
        attributeEntries['cim:ConnectivityNode.TopologicalNode'] = cimmenu.getAggregateComponentMenu("cim:ConnectivityNode", object['pintura:rdfid'], object['cim:ConnectivityNode.TopologicalNode'], 'cim:TopologicalNode', 'cim:ConnectivityNode.TopologicalNode');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }