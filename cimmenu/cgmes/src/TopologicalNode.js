import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TopologicalNode extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="TopologicalNode") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:TopologicalNode.SvVoltage' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.SvVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.SvVoltage'],
                                                   'cim:SvVoltage',
                                                   'cim:TopologicalNode.SvVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.SvVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.SvVoltage'],
                                                   'cim:SvVoltage',
                                                   'cim:TopologicalNode.SvVoltage'
                                                 );
        }
        if ('cim:TopologicalNode.TopologicalIsland' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.TopologicalIsland'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.TopologicalIsland'],
                                                   'cim:TopologicalIsland',
                                                   'cim:TopologicalNode.TopologicalIsland'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.TopologicalIsland'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.TopologicalIsland'],
                                                   'cim:TopologicalIsland',
                                                   'cim:TopologicalNode.TopologicalIsland'
                                                 );
        }
        if ('cim:TopologicalNode.BaseVoltage' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:TopologicalNode.BaseVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:TopologicalNode.BaseVoltage'
                                                 );
        }
        if ('cim:TopologicalNode.ConnectivityNodeContainer' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.ConnectivityNodeContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.ConnectivityNodeContainer'],
                                                   'cim:ConnectivityNodeContainer',
                                                   'cim:TopologicalNode.ConnectivityNodeContainer'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.ConnectivityNodeContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.ConnectivityNodeContainer'],
                                                   'cim:ConnectivityNodeContainer',
                                                   'cim:TopologicalNode.ConnectivityNodeContainer'
                                                 );
        }
        if ('cim:TopologicalNode.ReportingGroup' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.ReportingGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.ReportingGroup'],
                                                   'cim:ReportingGroup',
                                                   'cim:TopologicalNode.ReportingGroup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.ReportingGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.ReportingGroup'],
                                                   'cim:ReportingGroup',
                                                   'cim:TopologicalNode.ReportingGroup'
                                                 );
        }
        if ('cim:TopologicalNode.boundaryPoint' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.boundaryPoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.boundaryPoint'],
                                                   'cim:Boolean',
                                                   'cim:TopologicalNode.boundaryPoint'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.boundaryPoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.boundaryPoint'],
                                                   'cim:Boolean',
                                                   'cim:TopologicalNode.boundaryPoint'
                                                 );
        }
        if ('cim:TopologicalNode.fromEndIsoCode' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.fromEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.fromEndIsoCode'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.fromEndIsoCode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.fromEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.fromEndIsoCode'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.fromEndIsoCode'
                                                 );
        }
        if ('cim:TopologicalNode.fromEndName' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.fromEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.fromEndName'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.fromEndName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.fromEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.fromEndName'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.fromEndName'
                                                 );
        }
        if ('cim:TopologicalNode.fromEndNameTso' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.fromEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.fromEndNameTso'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.fromEndNameTso'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.fromEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.fromEndNameTso'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.fromEndNameTso'
                                                 );
        }
        if ('cim:TopologicalNode.toEndIsoCode' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.toEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.toEndIsoCode'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.toEndIsoCode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.toEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.toEndIsoCode'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.toEndIsoCode'
                                                 );
        }
        if ('cim:TopologicalNode.toEndName' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.toEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.toEndName'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.toEndName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.toEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.toEndName'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.toEndName'
                                                 );
        }
        if ('cim:TopologicalNode.toEndNameTso' in object) {
            attributeEntries['filledEntries']['cim:TopologicalNode.toEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.toEndNameTso'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.toEndNameTso'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalNode.toEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalNode.toEndNameTso'],
                                                   'cim:String',
                                                   'cim:TopologicalNode.toEndNameTso'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, ],
						'SvVoltage': [CGMESProfile.shortNames.SV, ],
						'TopologicalIsland': [CGMESProfile.shortNames.SV, ],
						'BaseVoltage': [CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, ],
						'ConnectivityNodeContainer': [CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, ],
						'ReportingGroup': [CGMESProfile.shortNames.TP, ],
						'boundaryPoint': [CGMESProfile.shortNames.TP_BD, ],
						'fromEndIsoCode': [CGMESProfile.shortNames.TP_BD, ],
						'fromEndName': [CGMESProfile.shortNames.TP_BD, ],
						'fromEndNameTso': [CGMESProfile.shortNames.TP_BD, ],
						'toEndIsoCode': [CGMESProfile.shortNames.TP_BD, ],
						'toEndName': [CGMESProfile.shortNames.TP_BD, ],
						'toEndNameTso': [CGMESProfile.shortNames.TP_BD, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TopologicalNode.SvVoltage",
            "cim:TopologicalNode.TopologicalIsland",
            "cim:TopologicalNode.BaseVoltage",
            "cim:TopologicalNode.ConnectivityNodeContainer",
            "cim:TopologicalNode.ReportingGroup",
            "cim:TopologicalNode.boundaryPoint",
            "cim:TopologicalNode.fromEndIsoCode",
            "cim:TopologicalNode.fromEndName",
            "cim:TopologicalNode.fromEndNameTso",
            "cim:TopologicalNode.toEndIsoCode",
            "cim:TopologicalNode.toEndName",
            "cim:TopologicalNode.toEndNameTso",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TopologicalNode.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class TopologicalNode: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TopologicalNode.attributeHTML(object, cimmenu);
        let filledEntries = separateEntries['filledEntries'];
        let emptyEntries = separateEntries['emptyEntries'];
        let attributeEntries = { ...filledEntries, ...emptyEntries };
        return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
    }
    static renderAsAttribute(matchingComponents) {
        let template = templates.handlebars_cim_update_complex_type;
        return template(matchingComponents);
    }
    static subClassList() {
        let subClasses = [
        ];
        return subClasses;
    }
};
export default TopologicalNode
