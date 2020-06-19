
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:BaseVoltage.TopologicalNode' in object) {
        console.log(object['cim:BaseVoltage.TopologicalNode'])
        attributeEntries['cim:BaseVoltage.TopologicalNode'] = cimmenu.getAggregateComponentMenu("cim:BaseVoltage", object['pintura:rdfid'], object['cim:BaseVoltage.TopologicalNode'], 'cim:TopologicalNode', 'cim:BaseVoltage.TopologicalNode');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }