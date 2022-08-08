import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindContPitchAngleIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContPitchAngleIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContPitchAngleIEC.dthetamax' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.dthetamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.dthetamax'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContPitchAngleIEC.dthetamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.dthetamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.dthetamax'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContPitchAngleIEC.dthetamax'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.dthetamin' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.dthetamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.dthetamin'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContPitchAngleIEC.dthetamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.dthetamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.dthetamin'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContPitchAngleIEC.dthetamin'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.kic' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.kic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kic'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kic'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.kic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kic'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kic'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.kiomega' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.kiomega'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kiomega'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kiomega'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.kiomega'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kiomega'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kiomega'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.kpc' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.kpc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kpc'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kpc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.kpc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kpc'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kpc'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.kpomega' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.kpomega'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kpomega'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kpomega'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.kpomega'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kpomega'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kpomega'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.kpx' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.kpx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kpx'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kpx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.kpx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.kpx'],
                                                   'cim:PU',
                                                   'cim:WindContPitchAngleIEC.kpx'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.thetamax' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.thetamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.thetamax'],
                                                   'cim:AngleDegrees',
                                                   'cim:WindContPitchAngleIEC.thetamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.thetamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.thetamax'],
                                                   'cim:AngleDegrees',
                                                   'cim:WindContPitchAngleIEC.thetamax'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.thetamin' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.thetamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.thetamin'],
                                                   'cim:AngleDegrees',
                                                   'cim:WindContPitchAngleIEC.thetamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.thetamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.thetamin'],
                                                   'cim:AngleDegrees',
                                                   'cim:WindContPitchAngleIEC.thetamin'
                                                 );
        }
        if ('cim:WindContPitchAngleIEC.ttheta' in object) {
            attributeEntries['filledEntries']['cim:WindContPitchAngleIEC.ttheta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.ttheta'],
                                                   'cim:Seconds',
                                                   'cim:WindContPitchAngleIEC.ttheta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPitchAngleIEC.ttheta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPitchAngleIEC.ttheta'],
                                                   'cim:Seconds',
                                                   'cim:WindContPitchAngleIEC.ttheta'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'dthetamax': [CGMESProfile.shortNames.DY, ],
						'dthetamin': [CGMESProfile.shortNames.DY, ],
						'kic': [CGMESProfile.shortNames.DY, ],
						'kiomega': [CGMESProfile.shortNames.DY, ],
						'kpc': [CGMESProfile.shortNames.DY, ],
						'kpomega': [CGMESProfile.shortNames.DY, ],
						'kpx': [CGMESProfile.shortNames.DY, ],
						'thetamax': [CGMESProfile.shortNames.DY, ],
						'thetamin': [CGMESProfile.shortNames.DY, ],
						'ttheta': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContPitchAngleIEC.dthetamax",
            "cim:WindContPitchAngleIEC.dthetamin",
            "cim:WindContPitchAngleIEC.kic",
            "cim:WindContPitchAngleIEC.kiomega",
            "cim:WindContPitchAngleIEC.kpc",
            "cim:WindContPitchAngleIEC.kpomega",
            "cim:WindContPitchAngleIEC.kpx",
            "cim:WindContPitchAngleIEC.thetamax",
            "cim:WindContPitchAngleIEC.thetamin",
            "cim:WindContPitchAngleIEC.ttheta",
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
            if (!WindContPitchAngleIEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindContPitchAngleIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContPitchAngleIEC.attributeHTML(object, cimmenu);
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
export default WindContPitchAngleIEC
