import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class LoadStatic extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="LoadStatic") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadStatic.LoadAggregate' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.LoadAggregate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.LoadAggregate'],
                                                   'cim:LoadAggregate',
                                                   'cim:LoadStatic.LoadAggregate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.LoadAggregate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.LoadAggregate'],
                                                   'cim:LoadAggregate',
                                                   'cim:LoadStatic.LoadAggregate'
                                                 );
        }
        if ('cim:LoadStatic.staticLoadModelType' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.staticLoadModelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.staticLoadModelType'],
                                                   'cim:StaticLoadModelKind',
                                                   'cim:LoadStatic.staticLoadModelType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.staticLoadModelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.staticLoadModelType'],
                                                   'cim:StaticLoadModelKind',
                                                   'cim:LoadStatic.staticLoadModelType'
                                                 );
        }
        if ('cim:LoadStatic.kp1' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kp1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kp1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp1'
                                                 );
        }
        if ('cim:LoadStatic.kp2' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kp2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kp2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp2'
                                                 );
        }
        if ('cim:LoadStatic.kp3' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kp3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kp3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp3'
                                                 );
        }
        if ('cim:LoadStatic.kp4' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kp4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp4'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kp4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kp4'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kp4'
                                                 );
        }
        if ('cim:LoadStatic.ep1' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.ep1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.ep1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.ep1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.ep1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.ep1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.ep1'
                                                 );
        }
        if ('cim:LoadStatic.ep2' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.ep2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.ep2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.ep2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.ep2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.ep2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.ep2'
                                                 );
        }
        if ('cim:LoadStatic.ep3' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.ep3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.ep3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.ep3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.ep3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.ep3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.ep3'
                                                 );
        }
        if ('cim:LoadStatic.kpf' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kpf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kpf'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kpf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kpf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kpf'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kpf'
                                                 );
        }
        if ('cim:LoadStatic.kq1' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kq1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kq1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq1'
                                                 );
        }
        if ('cim:LoadStatic.kq2' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kq2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kq2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq2'
                                                 );
        }
        if ('cim:LoadStatic.kq3' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kq3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kq3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq3'
                                                 );
        }
        if ('cim:LoadStatic.kq4' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kq4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq4'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kq4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kq4'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kq4'
                                                 );
        }
        if ('cim:LoadStatic.eq1' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.eq1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.eq1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.eq1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.eq1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.eq1'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.eq1'
                                                 );
        }
        if ('cim:LoadStatic.eq2' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.eq2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.eq2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.eq2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.eq2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.eq2'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.eq2'
                                                 );
        }
        if ('cim:LoadStatic.eq3' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.eq3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.eq3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.eq3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.eq3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.eq3'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.eq3'
                                                 );
        }
        if ('cim:LoadStatic.kqf' in object) {
            attributeEntries['filledEntries']['cim:LoadStatic.kqf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kqf'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kqf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadStatic.kqf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadStatic.kqf'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadStatic.kqf'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'LoadAggregate': [CGMESProfile.shortNames.DY, ],
						'staticLoadModelType': [CGMESProfile.shortNames.DY, ],
						'kp1': [CGMESProfile.shortNames.DY, ],
						'kp2': [CGMESProfile.shortNames.DY, ],
						'kp3': [CGMESProfile.shortNames.DY, ],
						'kp4': [CGMESProfile.shortNames.DY, ],
						'ep1': [CGMESProfile.shortNames.DY, ],
						'ep2': [CGMESProfile.shortNames.DY, ],
						'ep3': [CGMESProfile.shortNames.DY, ],
						'kpf': [CGMESProfile.shortNames.DY, ],
						'kq1': [CGMESProfile.shortNames.DY, ],
						'kq2': [CGMESProfile.shortNames.DY, ],
						'kq3': [CGMESProfile.shortNames.DY, ],
						'kq4': [CGMESProfile.shortNames.DY, ],
						'eq1': [CGMESProfile.shortNames.DY, ],
						'eq2': [CGMESProfile.shortNames.DY, ],
						'eq3': [CGMESProfile.shortNames.DY, ],
						'kqf': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadStatic.LoadAggregate",
            "cim:LoadStatic.staticLoadModelType",
            "cim:LoadStatic.kp1",
            "cim:LoadStatic.kp2",
            "cim:LoadStatic.kp3",
            "cim:LoadStatic.kp4",
            "cim:LoadStatic.ep1",
            "cim:LoadStatic.ep2",
            "cim:LoadStatic.ep3",
            "cim:LoadStatic.kpf",
            "cim:LoadStatic.kq1",
            "cim:LoadStatic.kq2",
            "cim:LoadStatic.kq3",
            "cim:LoadStatic.kq4",
            "cim:LoadStatic.eq1",
            "cim:LoadStatic.eq2",
            "cim:LoadStatic.eq3",
            "cim:LoadStatic.kqf",
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
            if (!LoadStatic.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadStatic: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadStatic.attributeHTML(object, cimmenu);
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
export default LoadStatic
