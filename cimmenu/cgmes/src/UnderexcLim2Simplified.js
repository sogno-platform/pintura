import templates from "../../templates/index.js"
import UnderexcitationLimiterDynamics from "./UnderexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class UnderexcLim2Simplified extends UnderexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="UnderexcLim2Simplified") {
        let attributeEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcLim2Simplified.q0' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.q0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.q0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.q0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.q0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.q0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.q0'
                                                 );
        }
        if ('cim:UnderexcLim2Simplified.q1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.q1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.q1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.q1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.q1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.q1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.q1'
                                                 );
        }
        if ('cim:UnderexcLim2Simplified.p0' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.p0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.p0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.p0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.p0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.p0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.p0'
                                                 );
        }
        if ('cim:UnderexcLim2Simplified.p1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.p1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.p1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.p1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.p1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.p1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.p1'
                                                 );
        }
        if ('cim:UnderexcLim2Simplified.kui' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.kui'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.kui'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.kui'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.kui'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.kui'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.kui'
                                                 );
        }
        if ('cim:UnderexcLim2Simplified.vuimin' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.vuimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.vuimin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.vuimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.vuimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.vuimin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.vuimin'
                                                 );
        }
        if ('cim:UnderexcLim2Simplified.vuimax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLim2Simplified.vuimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.vuimax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.vuimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLim2Simplified.vuimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLim2Simplified.vuimax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLim2Simplified.vuimax'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'q0': [CGMESProfile.shortNames.DY, ],
						'q1': [CGMESProfile.shortNames.DY, ],
						'p0': [CGMESProfile.shortNames.DY, ],
						'p1': [CGMESProfile.shortNames.DY, ],
						'kui': [CGMESProfile.shortNames.DY, ],
						'vuimin': [CGMESProfile.shortNames.DY, ],
						'vuimax': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcLim2Simplified.q0",
            "cim:UnderexcLim2Simplified.q1",
            "cim:UnderexcLim2Simplified.p0",
            "cim:UnderexcLim2Simplified.p1",
            "cim:UnderexcLim2Simplified.kui",
            "cim:UnderexcLim2Simplified.vuimin",
            "cim:UnderexcLim2Simplified.vuimax",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( UnderexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!UnderexcLim2Simplified.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class UnderexcLim2Simplified: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcLim2Simplified.attributeHTML(object, cimmenu);
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
export default UnderexcLim2Simplified
