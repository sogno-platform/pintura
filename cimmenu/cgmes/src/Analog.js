import templates from "../../templates/index.js"
import Measurement from "./Measurement.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Analog extends Measurement {

    static attributeHTML(object, cimmenu, classType="Analog") {
        let attributeEntries = Measurement.attributeHTML(object, cimmenu, classType);
        if ('cim:Analog.positiveFlowIn' in object) {
            attributeEntries['filledEntries']['cim:Analog.positiveFlowIn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Analog.positiveFlowIn'],
                                                   'cim:Boolean',
                                                   'cim:Analog.positiveFlowIn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Analog.positiveFlowIn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Analog.positiveFlowIn'],
                                                   'cim:Boolean',
                                                   'cim:Analog.positiveFlowIn'
                                                 );
        }
        if ('cim:Analog.LimitSets' in object) {
            attributeEntries['filledEntries']['cim:Analog.LimitSets'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Analog.LimitSets'],
                                                   'cim:AnalogLimitSet',
                                                   'cim:Analog.LimitSets'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Analog.LimitSets'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Analog.LimitSets'],
                                                   'cim:AnalogLimitSet',
                                                   'cim:Analog.LimitSets'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'positiveFlowIn': [CGMESProfile.shortNames.EQ, ],
						'LimitSets': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Analog.positiveFlowIn",
            "cim:Analog.LimitSets",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Measurement.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Analog.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Analog: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Analog.attributeHTML(object, cimmenu);
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
export default Analog
