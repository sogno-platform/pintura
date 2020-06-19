
import templates from "../../../../index.js";
const generateHTML = function(object, cimmenu) { 
    /* console.log(object); */
    /* dot: [object Object] key:  */
    /* classType, parentId, rdfid, type, attribute */
    let attributeEntries = {};
    if ('cim:Location.CoordinateSystem' in object) {
        console.log(object['cim:Location.CoordinateSystem'])
        attributeEntries['cim:Location.CoordinateSystem'] = cimmenu.getAggregateComponentMenu("cim:Location", object['pintura:rdfid'], object['cim:Location.CoordinateSystem'], 'cim:CoordinateSystem', 'cim:Location.CoordinateSystem');
    }
    if ('cim:Location.PowerSystemResources' in object) {
        console.log(object['cim:Location.PowerSystemResources'])
        attributeEntries['cim:Location.PowerSystemResources'] = cimmenu.getAggregateComponentMenu("cim:Location", object['pintura:rdfid'], object['cim:Location.PowerSystemResources'], 'cim:PowerSystemResource', 'cim:Location.PowerSystemResources');
    }
    if ('cim:Location.PositionPoints' in object) {
        console.log(object['cim:Location.PositionPoints'])
        attributeEntries['cim:Location.PositionPoints'] = cimmenu.getAggregateComponentMenu("cim:Location", object['pintura:rdfid'], object['cim:Location.PositionPoints'], 'cim:PositionPoint', 'cim:Location.PositionPoints');
    }
    if ('cim:IdentifiedObject.mRID' in object) {
        console.log(object['cim:IdentifiedObject.mRID'])
        attributeEntries['cim:IdentifiedObject.mRID'] = cimmenu.getAggregateComponentMenu("cim:Location", object['pintura:rdfid'], object['cim:IdentifiedObject.mRID'], 'cim:String', 'cim:IdentifiedObject.mRID');
    }
    if ('cim:IdentifiedObject.name' in object) {
        console.log(object['cim:IdentifiedObject.name'])
        attributeEntries['cim:IdentifiedObject.name'] = cimmenu.getAggregateComponentMenu("cim:Location", object['pintura:rdfid'], object['cim:IdentifiedObject.name'], 'cim:String', 'cim:IdentifiedObject.name');
    }
    console.log({ 'attributes': attributeEntries})
    return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
}

export default { "renderAsAttribute": "renderClass","renderAsClass": generateHTML }