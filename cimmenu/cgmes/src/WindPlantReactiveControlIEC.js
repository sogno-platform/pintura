import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindPlantReactiveControlIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindPlantReactiveControlIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindPlantReactiveControlIEC.kiwpx' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.kiwpx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.kiwpx'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantReactiveControlIEC.kiwpx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.kiwpx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.kiwpx'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantReactiveControlIEC.kiwpx'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.kpwpx' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.kpwpx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.kpwpx'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantReactiveControlIEC.kpwpx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.kpwpx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.kpwpx'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantReactiveControlIEC.kpwpx'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.kwpqu' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.kwpqu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.kwpqu'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.kwpqu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.kwpqu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.kwpqu'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.kwpqu'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.mwppf' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.mwppf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.mwppf'],
                                                   'cim:Boolean',
                                                   'cim:WindPlantReactiveControlIEC.mwppf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.mwppf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.mwppf'],
                                                   'cim:Boolean',
                                                   'cim:WindPlantReactiveControlIEC.mwppf'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.mwpu' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.mwpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.mwpu'],
                                                   'cim:Boolean',
                                                   'cim:WindPlantReactiveControlIEC.mwpu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.mwpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.mwpu'],
                                                   'cim:Boolean',
                                                   'cim:WindPlantReactiveControlIEC.mwpu'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.twppfilt' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.twppfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.twppfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.twppfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.twppfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.twppfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.twppfilt'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.twpqfilt' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.twpqfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.twpqfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.twpqfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.twpqfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.twpqfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.twpqfilt'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.twpufilt' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.twpufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.twpufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.twpufilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.twpufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.twpufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.twpufilt'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.txft' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.txft'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.txft'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.txft'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.txft'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.txft'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.txft'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.txfv' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.txfv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.txfv'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.txfv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.txfv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.txfv'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantReactiveControlIEC.txfv'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.uwpqdip' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.uwpqdip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.uwpqdip'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.uwpqdip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.uwpqdip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.uwpqdip'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.uwpqdip'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.xrefmax' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.xrefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.xrefmax'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.xrefmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.xrefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.xrefmax'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.xrefmax'
                                                 );
        }
        if ('cim:WindPlantReactiveControlIEC.xrefmin' in object) {
            attributeEntries['filledEntries']['cim:WindPlantReactiveControlIEC.xrefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.xrefmin'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.xrefmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantReactiveControlIEC.xrefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantReactiveControlIEC.xrefmin'],
                                                   'cim:PU',
                                                   'cim:WindPlantReactiveControlIEC.xrefmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kiwpx': [CGMESProfile.shortNames.DY, ],
						'kpwpx': [CGMESProfile.shortNames.DY, ],
						'kwpqu': [CGMESProfile.shortNames.DY, ],
						'mwppf': [CGMESProfile.shortNames.DY, ],
						'mwpu': [CGMESProfile.shortNames.DY, ],
						'twppfilt': [CGMESProfile.shortNames.DY, ],
						'twpqfilt': [CGMESProfile.shortNames.DY, ],
						'twpufilt': [CGMESProfile.shortNames.DY, ],
						'txft': [CGMESProfile.shortNames.DY, ],
						'txfv': [CGMESProfile.shortNames.DY, ],
						'uwpqdip': [CGMESProfile.shortNames.DY, ],
						'xrefmax': [CGMESProfile.shortNames.DY, ],
						'xrefmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindPlantReactiveControlIEC.kiwpx",
            "cim:WindPlantReactiveControlIEC.kpwpx",
            "cim:WindPlantReactiveControlIEC.kwpqu",
            "cim:WindPlantReactiveControlIEC.mwppf",
            "cim:WindPlantReactiveControlIEC.mwpu",
            "cim:WindPlantReactiveControlIEC.twppfilt",
            "cim:WindPlantReactiveControlIEC.twpqfilt",
            "cim:WindPlantReactiveControlIEC.twpufilt",
            "cim:WindPlantReactiveControlIEC.txft",
            "cim:WindPlantReactiveControlIEC.txfv",
            "cim:WindPlantReactiveControlIEC.uwpqdip",
            "cim:WindPlantReactiveControlIEC.xrefmax",
            "cim:WindPlantReactiveControlIEC.xrefmin",
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
            if (!WindPlantReactiveControlIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindPlantReactiveControlIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindPlantReactiveControlIEC.attributeHTML(object, cimmenu);
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
export default WindPlantReactiveControlIEC
