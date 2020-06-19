
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:PositionPoint.Location' in object) {
        console.log(object['cim:PositionPoint.Location'])
        attributeEntries['cim:PositionPoint.Location'] = cimmenu.getAggregateComponentMenu("cim:PositionPoint", object['pintura:rdfid'], object['cim:PositionPoint.Location'], 'cim:Location', 'cim:PositionPoint.Location');
    }
    if ('cim:PositionPoint.sequenceNumber' in object) {
        console.log(object['cim:PositionPoint.sequenceNumber'])
        attributeEntries['cim:PositionPoint.sequenceNumber'] = cimmenu.getAggregateComponentMenu("cim:PositionPoint", object['pintura:rdfid'], object['cim:PositionPoint.sequenceNumber'], 'cim:Integer', 'cim:PositionPoint.sequenceNumber');
    }
    if ('cim:PositionPoint.xPosition' in object) {
        console.log(object['cim:PositionPoint.xPosition'])
        attributeEntries['cim:PositionPoint.xPosition'] = cimmenu.getAggregateComponentMenu("cim:PositionPoint", object['pintura:rdfid'], object['cim:PositionPoint.xPosition'], 'cim:String', 'cim:PositionPoint.xPosition');
    }
    if ('cim:PositionPoint.yPosition' in object) {
        console.log(object['cim:PositionPoint.yPosition'])
        attributeEntries['cim:PositionPoint.yPosition'] = cimmenu.getAggregateComponentMenu("cim:PositionPoint", object['pintura:rdfid'], object['cim:PositionPoint.yPosition'], 'cim:String', 'cim:PositionPoint.yPosition');
    }
    if ('cim:PositionPoint.zPosition' in object) {
        console.log(object['cim:PositionPoint.zPosition'])
        attributeEntries['cim:PositionPoint.zPosition'] = cimmenu.getAggregateComponentMenu("cim:PositionPoint", object['pintura:rdfid'], object['cim:PositionPoint.zPosition'], 'cim:String', 'cim:PositionPoint.zPosition');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }