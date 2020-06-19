
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:DCEquipmentContainer.DCTopologicalNode' in object) {
        console.log(object['cim:DCEquipmentContainer.DCTopologicalNode'])
        attributeEntries['cim:DCEquipmentContainer.DCTopologicalNode'] = cimmenu.getAggregateComponentMenu("cim:DCEquipmentContainer", object['pintura:rdfid'], object['cim:DCEquipmentContainer.DCTopologicalNode'], 'cim:DCTopologicalNode', 'cim:DCEquipmentContainer.DCTopologicalNode');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }