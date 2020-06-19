import templates from "../../templates/index.js"
import LoadDynamics from "./LoadDynamics.js"
import common from "../../src/common.js"

class LoadAggregate extends LoadDynamics {

    static attributeHTML(object, cimmenu, classType="LoadAggregate") {
        let attributeEntries = LoadDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadAggregate.LoadMotor' in object) {
            attributeEntries['filledEntries']['cim:LoadAggregate.LoadMotor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadAggregate.LoadMotor'],
                                                   'cim:LoadMotor',
                                                   'cim:LoadAggregate.LoadMotor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadAggregate.LoadMotor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadAggregate.LoadMotor'],
                                                   'cim:LoadMotor',
                                                   'cim:LoadAggregate.LoadMotor'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadAggregate.LoadMotor",
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
            if (!LoadAggregate.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadAggregate: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadAggregate.attributeHTML(object, cimmenu);
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
export default LoadAggregate
