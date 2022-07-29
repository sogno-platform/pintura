import templates from "../../templates/index.js"
import ACDCConverter from "./ACDCConverter.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class CsConverter extends ACDCConverter {

    static attributeHTML(object, cimmenu, classType="CsConverter") {
        let attributeEntries = ACDCConverter.attributeHTML(object, cimmenu, classType);
        if ('cim:CsConverter.maxAlpha' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.maxAlpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.maxAlpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.maxAlpha'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.maxAlpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.maxAlpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.maxAlpha'
                                                 );
        }
        if ('cim:CsConverter.maxGamma' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.maxGamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.maxGamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.maxGamma'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.maxGamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.maxGamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.maxGamma'
                                                 );
        }
        if ('cim:CsConverter.maxIdc' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.maxIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.maxIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.maxIdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.maxIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.maxIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.maxIdc'
                                                 );
        }
        if ('cim:CsConverter.minAlpha' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.minAlpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.minAlpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.minAlpha'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.minAlpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.minAlpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.minAlpha'
                                                 );
        }
        if ('cim:CsConverter.minGamma' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.minGamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.minGamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.minGamma'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.minGamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.minGamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.minGamma'
                                                 );
        }
        if ('cim:CsConverter.minIdc' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.minIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.minIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.minIdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.minIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.minIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.minIdc'
                                                 );
        }
        if ('cim:CsConverter.ratedIdc' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.ratedIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.ratedIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.ratedIdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.ratedIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.ratedIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.ratedIdc'
                                                 );
        }
        if ('cim:CsConverter.operatingMode' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.operatingMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.operatingMode'],
                                                   'cim:CsOperatingModeKind',
                                                   'cim:CsConverter.operatingMode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.operatingMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.operatingMode'],
                                                   'cim:CsOperatingModeKind',
                                                   'cim:CsConverter.operatingMode'
                                                 );
        }
        if ('cim:CsConverter.pPccControl' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.pPccControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.pPccControl'],
                                                   'cim:CsPpccControlKind',
                                                   'cim:CsConverter.pPccControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.pPccControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.pPccControl'],
                                                   'cim:CsPpccControlKind',
                                                   'cim:CsConverter.pPccControl'
                                                 );
        }
        if ('cim:CsConverter.targetAlpha' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.targetAlpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.targetAlpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.targetAlpha'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.targetAlpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.targetAlpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.targetAlpha'
                                                 );
        }
        if ('cim:CsConverter.targetGamma' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.targetGamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.targetGamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.targetGamma'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.targetGamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.targetGamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.targetGamma'
                                                 );
        }
        if ('cim:CsConverter.targetIdc' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.targetIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.targetIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.targetIdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.targetIdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.targetIdc'],
                                                   'cim:CurrentFlow',
                                                   'cim:CsConverter.targetIdc'
                                                 );
        }
        if ('cim:CsConverter.alpha' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.alpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.alpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.alpha'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.alpha'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.alpha'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.alpha'
                                                 );
        }
        if ('cim:CsConverter.gamma' in object) {
            attributeEntries['filledEntries']['cim:CsConverter.gamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.gamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.gamma'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CsConverter.gamma'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CsConverter.gamma'],
                                                   'cim:AngleDegrees',
                                                   'cim:CsConverter.gamma'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, ],
						'maxAlpha': [CGMESProfile.shortNames.EQ, ],
						'maxGamma': [CGMESProfile.shortNames.EQ, ],
						'maxIdc': [CGMESProfile.shortNames.EQ, ],
						'minAlpha': [CGMESProfile.shortNames.EQ, ],
						'minGamma': [CGMESProfile.shortNames.EQ, ],
						'minIdc': [CGMESProfile.shortNames.EQ, ],
						'ratedIdc': [CGMESProfile.shortNames.EQ, ],
						'operatingMode': [CGMESProfile.shortNames.SSH, ],
						'pPccControl': [CGMESProfile.shortNames.SSH, ],
						'targetAlpha': [CGMESProfile.shortNames.SSH, ],
						'targetGamma': [CGMESProfile.shortNames.SSH, ],
						'targetIdc': [CGMESProfile.shortNames.SSH, ],
						'alpha': [CGMESProfile.shortNames.SV, ],
						'gamma': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:CsConverter.maxAlpha",
            "cim:CsConverter.maxGamma",
            "cim:CsConverter.maxIdc",
            "cim:CsConverter.minAlpha",
            "cim:CsConverter.minGamma",
            "cim:CsConverter.minIdc",
            "cim:CsConverter.ratedIdc",
            "cim:CsConverter.operatingMode",
            "cim:CsConverter.pPccControl",
            "cim:CsConverter.targetAlpha",
            "cim:CsConverter.targetGamma",
            "cim:CsConverter.targetIdc",
            "cim:CsConverter.alpha",
            "cim:CsConverter.gamma",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ACDCConverter.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!CsConverter.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class CsConverter: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = CsConverter.attributeHTML(object, cimmenu);
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
export default CsConverter
