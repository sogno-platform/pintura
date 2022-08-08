import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TieFlow extends BaseClass {

    static attributeHTML(object, cimmenu, classType="TieFlow") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:TieFlow.Terminal' in object) {
            attributeEntries['filledEntries']['cim:TieFlow.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TieFlow.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:TieFlow.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TieFlow.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TieFlow.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:TieFlow.Terminal'
                                                 );
        }
        if ('cim:TieFlow.ControlArea' in object) {
            attributeEntries['filledEntries']['cim:TieFlow.ControlArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TieFlow.ControlArea'],
                                                   'cim:ControlArea',
                                                   'cim:TieFlow.ControlArea'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TieFlow.ControlArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TieFlow.ControlArea'],
                                                   'cim:ControlArea',
                                                   'cim:TieFlow.ControlArea'
                                                 );
        }
        if ('cim:TieFlow.positiveFlowIn' in object) {
            attributeEntries['filledEntries']['cim:TieFlow.positiveFlowIn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TieFlow.positiveFlowIn'],
                                                   'cim:Boolean',
                                                   'cim:TieFlow.positiveFlowIn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TieFlow.positiveFlowIn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TieFlow.positiveFlowIn'],
                                                   'cim:Boolean',
                                                   'cim:TieFlow.positiveFlowIn'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'Terminal': [CGMESProfile.shortNames.EQ, ],
						'ControlArea': [CGMESProfile.shortNames.EQ, ],
						'positiveFlowIn': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TieFlow.Terminal",
            "cim:TieFlow.ControlArea",
            "cim:TieFlow.positiveFlowIn",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TieFlow.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TieFlow: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TieFlow.attributeHTML(object, cimmenu);
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
export default TieFlow
