
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:CoordinateSystem.crsUrn' in object) {
        console.log(object['cim:CoordinateSystem.crsUrn'])
        attributeEntries['cim:CoordinateSystem.crsUrn'] = cimmenu.getAggregateComponentMenu("cim:CoordinateSystem", object['pintura:rdfid'], object['cim:CoordinateSystem.crsUrn'], 'cim:String', 'cim:CoordinateSystem.crsUrn');
    }
    if ('cim:CoordinateSystem.Location' in object) {
        console.log(object['cim:CoordinateSystem.Location'])
        attributeEntries['cim:CoordinateSystem.Location'] = cimmenu.getAggregateComponentMenu("cim:CoordinateSystem", object['pintura:rdfid'], object['cim:CoordinateSystem.Location'], 'cim:Location', 'cim:CoordinateSystem.Location');
    }
    if ('cim:IdentifiedObject.mRID' in object) {
        console.log(object['cim:IdentifiedObject.mRID'])
        attributeEntries['cim:IdentifiedObject.mRID'] = cimmenu.getAggregateComponentMenu("cim:CoordinateSystem", object['pintura:rdfid'], object['cim:IdentifiedObject.mRID'], 'cim:String', 'cim:IdentifiedObject.mRID');
    }
    if ('cim:IdentifiedObject.name' in object) {
        console.log(object['cim:IdentifiedObject.name'])
        attributeEntries['cim:IdentifiedObject.name'] = cimmenu.getAggregateComponentMenu("cim:CoordinateSystem", object['pintura:rdfid'], object['cim:IdentifiedObject.name'], 'cim:String', 'cim:IdentifiedObject.name');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }