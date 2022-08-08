import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindDynamicsLookupTable extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindDynamicsLookupTable") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindDynamicsLookupTable.WindContCurrLimIEC' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.WindContCurrLimIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindContCurrLimIEC'],
                                                   'cim:WindContCurrLimIEC',
                                                   'cim:WindDynamicsLookupTable.WindContCurrLimIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.WindContCurrLimIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindContCurrLimIEC'],
                                                   'cim:WindContCurrLimIEC',
                                                   'cim:WindDynamicsLookupTable.WindContCurrLimIEC'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.WindContPType3IEC' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.WindContPType3IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindContPType3IEC'],
                                                   'cim:WindContPType3IEC',
                                                   'cim:WindDynamicsLookupTable.WindContPType3IEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.WindContPType3IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindContPType3IEC'],
                                                   'cim:WindContPType3IEC',
                                                   'cim:WindDynamicsLookupTable.WindContPType3IEC'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.WindContRotorRIEC' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.WindContRotorRIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindContRotorRIEC'],
                                                   'cim:WindContRotorRIEC',
                                                   'cim:WindDynamicsLookupTable.WindContRotorRIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.WindContRotorRIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindContRotorRIEC'],
                                                   'cim:WindContRotorRIEC',
                                                   'cim:WindDynamicsLookupTable.WindContRotorRIEC'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.input' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.input'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.input'],
                                                   'cim:Simple_Float',
                                                   'cim:WindDynamicsLookupTable.input'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.input'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.input'],
                                                   'cim:Simple_Float',
                                                   'cim:WindDynamicsLookupTable.input'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.lookupTableFunctionType' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.lookupTableFunctionType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.lookupTableFunctionType'],
                                                   'cim:WindLookupTableFunctionKind',
                                                   'cim:WindDynamicsLookupTable.lookupTableFunctionType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.lookupTableFunctionType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.lookupTableFunctionType'],
                                                   'cim:WindLookupTableFunctionKind',
                                                   'cim:WindDynamicsLookupTable.lookupTableFunctionType'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.output' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.output'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.output'],
                                                   'cim:Simple_Float',
                                                   'cim:WindDynamicsLookupTable.output'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.output'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.output'],
                                                   'cim:Simple_Float',
                                                   'cim:WindDynamicsLookupTable.output'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.sequence' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.sequence'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.sequence'],
                                                   'cim:Integer',
                                                   'cim:WindDynamicsLookupTable.sequence'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.sequence'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.sequence'],
                                                   'cim:Integer',
                                                   'cim:WindDynamicsLookupTable.sequence'
                                                 );
        }
        if ('cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC' in object) {
            attributeEntries['filledEntries']['cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindPlantFreqPcontrolIEC'],
                                                   'cim:WindPlantFreqPcontrolIEC',
                                                   'cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindDynamicsLookupTable.WindPlantFreqPcontrolIEC'],
                                                   'cim:WindPlantFreqPcontrolIEC',
                                                   'cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindContCurrLimIEC': [CGMESProfile.shortNames.DY, ],
						'WindContPType3IEC': [CGMESProfile.shortNames.DY, ],
						'WindContRotorRIEC': [CGMESProfile.shortNames.DY, ],
						'input': [CGMESProfile.shortNames.DY, ],
						'lookupTableFunctionType': [CGMESProfile.shortNames.DY, ],
						'output': [CGMESProfile.shortNames.DY, ],
						'sequence': [CGMESProfile.shortNames.DY, ],
						'WindPlantFreqPcontrolIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindDynamicsLookupTable.WindContCurrLimIEC",
            "cim:WindDynamicsLookupTable.WindContPType3IEC",
            "cim:WindDynamicsLookupTable.WindContRotorRIEC",
            "cim:WindDynamicsLookupTable.input",
            "cim:WindDynamicsLookupTable.lookupTableFunctionType",
            "cim:WindDynamicsLookupTable.output",
            "cim:WindDynamicsLookupTable.sequence",
            "cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC",
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
            if (!WindDynamicsLookupTable.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindDynamicsLookupTable: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindDynamicsLookupTable.attributeHTML(object, cimmenu);
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
export default WindDynamicsLookupTable
