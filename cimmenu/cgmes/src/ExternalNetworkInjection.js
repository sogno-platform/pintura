import templates from "../../templates/index.js"
import RegulatingCondEq from "./RegulatingCondEq.js"
import common from "../../src/common.js"

class ExternalNetworkInjection extends RegulatingCondEq {

    static attributeHTML(object, cimmenu, classType="ExternalNetworkInjection") {
        let attributeEntries = RegulatingCondEq.attributeHTML(object, cimmenu, classType);
        if ('cim:ExternalNetworkInjection.governorSCD' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.governorSCD'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.governorSCD'],
                                                   'cim:ActivePowerPerFrequency',
                                                   'cim:ExternalNetworkInjection.governorSCD'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.governorSCD'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.governorSCD'],
                                                   'cim:ActivePowerPerFrequency',
                                                   'cim:ExternalNetworkInjection.governorSCD'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.maxP' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.maxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxP'],
                                                   'cim:ActivePower',
                                                   'cim:ExternalNetworkInjection.maxP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.maxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxP'],
                                                   'cim:ActivePower',
                                                   'cim:ExternalNetworkInjection.maxP'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.maxQ' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.maxQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxQ'],
                                                   'cim:ReactivePower',
                                                   'cim:ExternalNetworkInjection.maxQ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.maxQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxQ'],
                                                   'cim:ReactivePower',
                                                   'cim:ExternalNetworkInjection.maxQ'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.minP' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.minP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minP'],
                                                   'cim:ActivePower',
                                                   'cim:ExternalNetworkInjection.minP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.minP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minP'],
                                                   'cim:ActivePower',
                                                   'cim:ExternalNetworkInjection.minP'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.minQ' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.minQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minQ'],
                                                   'cim:ReactivePower',
                                                   'cim:ExternalNetworkInjection.minQ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.minQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minQ'],
                                                   'cim:ReactivePower',
                                                   'cim:ExternalNetworkInjection.minQ'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.ikSecond' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.ikSecond'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.ikSecond'],
                                                   'cim:Boolean',
                                                   'cim:ExternalNetworkInjection.ikSecond'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.ikSecond'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.ikSecond'],
                                                   'cim:Boolean',
                                                   'cim:ExternalNetworkInjection.ikSecond'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.maxInitialSymShCCurrent' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.maxInitialSymShCCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxInitialSymShCCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:ExternalNetworkInjection.maxInitialSymShCCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.maxInitialSymShCCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxInitialSymShCCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:ExternalNetworkInjection.maxInitialSymShCCurrent'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.maxR0ToX0Ratio' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.maxR0ToX0Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxR0ToX0Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.maxR0ToX0Ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.maxR0ToX0Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxR0ToX0Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.maxR0ToX0Ratio'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.maxR1ToX1Ratio' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.maxR1ToX1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxR1ToX1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.maxR1ToX1Ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.maxR1ToX1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxR1ToX1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.maxR1ToX1Ratio'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.maxZ0ToZ1Ratio' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.maxZ0ToZ1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxZ0ToZ1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.maxZ0ToZ1Ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.maxZ0ToZ1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.maxZ0ToZ1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.maxZ0ToZ1Ratio'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.minInitialSymShCCurrent' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.minInitialSymShCCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minInitialSymShCCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:ExternalNetworkInjection.minInitialSymShCCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.minInitialSymShCCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minInitialSymShCCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:ExternalNetworkInjection.minInitialSymShCCurrent'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.minR0ToX0Ratio' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.minR0ToX0Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minR0ToX0Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.minR0ToX0Ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.minR0ToX0Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minR0ToX0Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.minR0ToX0Ratio'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.minR1ToX1Ratio' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.minR1ToX1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minR1ToX1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.minR1ToX1Ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.minR1ToX1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minR1ToX1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.minR1ToX1Ratio'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.minZ0ToZ1Ratio' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.minZ0ToZ1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minZ0ToZ1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.minZ0ToZ1Ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.minZ0ToZ1Ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.minZ0ToZ1Ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:ExternalNetworkInjection.minZ0ToZ1Ratio'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.voltageFactor' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.voltageFactor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.voltageFactor'],
                                                   'cim:PU',
                                                   'cim:ExternalNetworkInjection.voltageFactor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.voltageFactor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.voltageFactor'],
                                                   'cim:PU',
                                                   'cim:ExternalNetworkInjection.voltageFactor'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.referencePriority' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.referencePriority'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.referencePriority'],
                                                   'cim:Integer',
                                                   'cim:ExternalNetworkInjection.referencePriority'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.referencePriority'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.referencePriority'],
                                                   'cim:Integer',
                                                   'cim:ExternalNetworkInjection.referencePriority'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.p' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.p'],
                                                   'cim:ActivePower',
                                                   'cim:ExternalNetworkInjection.p'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.p'],
                                                   'cim:ActivePower',
                                                   'cim:ExternalNetworkInjection.p'
                                                 );
        }
        if ('cim:ExternalNetworkInjection.q' in object) {
            attributeEntries['filledEntries']['cim:ExternalNetworkInjection.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.q'],
                                                   'cim:ReactivePower',
                                                   'cim:ExternalNetworkInjection.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExternalNetworkInjection.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExternalNetworkInjection.q'],
                                                   'cim:ReactivePower',
                                                   'cim:ExternalNetworkInjection.q'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExternalNetworkInjection.governorSCD",
            "cim:ExternalNetworkInjection.maxP",
            "cim:ExternalNetworkInjection.maxQ",
            "cim:ExternalNetworkInjection.minP",
            "cim:ExternalNetworkInjection.minQ",
            "cim:ExternalNetworkInjection.ikSecond",
            "cim:ExternalNetworkInjection.maxInitialSymShCCurrent",
            "cim:ExternalNetworkInjection.maxR0ToX0Ratio",
            "cim:ExternalNetworkInjection.maxR1ToX1Ratio",
            "cim:ExternalNetworkInjection.maxZ0ToZ1Ratio",
            "cim:ExternalNetworkInjection.minInitialSymShCCurrent",
            "cim:ExternalNetworkInjection.minR0ToX0Ratio",
            "cim:ExternalNetworkInjection.minR1ToX1Ratio",
            "cim:ExternalNetworkInjection.minZ0ToZ1Ratio",
            "cim:ExternalNetworkInjection.voltageFactor",
            "cim:ExternalNetworkInjection.referencePriority",
            "cim:ExternalNetworkInjection.p",
            "cim:ExternalNetworkInjection.q",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RegulatingCondEq.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExternalNetworkInjection.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExternalNetworkInjection: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExternalNetworkInjection.attributeHTML(object, cimmenu);
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
export default ExternalNetworkInjection
