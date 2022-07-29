import templates from "../../templates/index.js"
import LoadDynamics from "./LoadDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class LoadComposite extends LoadDynamics {

    static attributeHTML(object, cimmenu, classType="LoadComposite") {
        let attributeEntries = LoadDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadComposite.epvs' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.epvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epvs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epvs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.epvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epvs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epvs'
                                                 );
        }
        if ('cim:LoadComposite.epfs' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.epfs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epfs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epfs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.epfs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epfs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epfs'
                                                 );
        }
        if ('cim:LoadComposite.eqvs' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.eqvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqvs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqvs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.eqvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqvs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqvs'
                                                 );
        }
        if ('cim:LoadComposite.eqfs' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.eqfs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqfs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqfs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.eqfs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqfs'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqfs'
                                                 );
        }
        if ('cim:LoadComposite.epvd' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.epvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epvd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epvd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.epvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epvd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epvd'
                                                 );
        }
        if ('cim:LoadComposite.epfd' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.epfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epfd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epfd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.epfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.epfd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.epfd'
                                                 );
        }
        if ('cim:LoadComposite.eqvd' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.eqvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqvd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqvd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.eqvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqvd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqvd'
                                                 );
        }
        if ('cim:LoadComposite.eqfd' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.eqfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqfd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqfd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.eqfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.eqfd'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.eqfd'
                                                 );
        }
        if ('cim:LoadComposite.lfrac' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.lfrac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.lfrac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.lfrac'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.lfrac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.lfrac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.lfrac'
                                                 );
        }
        if ('cim:LoadComposite.h' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.h'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.h'],
                                                   'cim:Seconds',
                                                   'cim:LoadComposite.h'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.h'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.h'],
                                                   'cim:Seconds',
                                                   'cim:LoadComposite.h'
                                                 );
        }
        if ('cim:LoadComposite.pfrac' in object) {
            attributeEntries['filledEntries']['cim:LoadComposite.pfrac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.pfrac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.pfrac'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadComposite.pfrac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadComposite.pfrac'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadComposite.pfrac'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'epvs': [CGMESProfile.shortNames.DY, ],
						'epfs': [CGMESProfile.shortNames.DY, ],
						'eqvs': [CGMESProfile.shortNames.DY, ],
						'eqfs': [CGMESProfile.shortNames.DY, ],
						'epvd': [CGMESProfile.shortNames.DY, ],
						'epfd': [CGMESProfile.shortNames.DY, ],
						'eqvd': [CGMESProfile.shortNames.DY, ],
						'eqfd': [CGMESProfile.shortNames.DY, ],
						'lfrac': [CGMESProfile.shortNames.DY, ],
						'h': [CGMESProfile.shortNames.DY, ],
						'pfrac': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadComposite.epvs",
            "cim:LoadComposite.epfs",
            "cim:LoadComposite.eqvs",
            "cim:LoadComposite.eqfs",
            "cim:LoadComposite.epvd",
            "cim:LoadComposite.epfd",
            "cim:LoadComposite.eqvd",
            "cim:LoadComposite.eqfd",
            "cim:LoadComposite.lfrac",
            "cim:LoadComposite.h",
            "cim:LoadComposite.pfrac",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( LoadDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!LoadComposite.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadComposite: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadComposite.attributeHTML(object, cimmenu);
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
export default LoadComposite
