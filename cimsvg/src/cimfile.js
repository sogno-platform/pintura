/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
 */

import cimxml from "./cimxml.js";
import JSZip from "jszip";
import cgmes from '../../cimmenu/cgmes/cgmesIndex.js';

class cimfile {

    static saveFile(data, filename) {
        // TODO : get rid of the document references
        let filesave = document.getElementById("filesave");
        let element = document.createElement("a");
        if (typeof data === "string") {
            element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
        }
        else if (typeof data === "object") {
            element.setAttribute("href", URL.createObjectURL(data));
        }
        else {
            console.error("I don't know how to save data of type ", typeof data);
        }
        element.setAttribute("download", filename);
        element.style.display = "none";
        filesave.appendChild(element);
        element.click();
        filesave.removeChild(element);
    }

    static uploadAsZip(xml, uri) {
        let zip = new JSZip();
        zip.file("pinturaGrid.xml", xml);
        zip.generateAsync({type:"blob"})
            .then(function (blob) {
                var oReq = new XMLHttpRequest();
                oReq.open("POST", uri, true);
                oReq.setRequestHeader("Accept", "text/plain");
                oReq.onreadystatechange = function () {
                    if (oReq.readyState === 4) {
                        if (oReq.status !== 200) {
                            console.error("Error [", oReq.statusText, "](", oReq.status, ")");
                        }
                    }
                };
                var formData = new FormData();
                formData.append("pinturaGrid.zip", blob);
                oReq.send(formData);
            });
    }

    static uploadAsText(xml, uri) {
        fetch(uri, {
            method: "post",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "text/plain"
            },
            body: xml
        }).then(res=>res.text());
    }

    static sortJsonKeys(unordered) {
        const ordered = {};
        Object.keys(unordered).sort().forEach(function(key) {
            ordered[key] = unordered[key];
        });
        return ordered;
    }

    static saveZip(zip, filename) {
        zip.generateAsync({type:"blob"})
            .then((blob) => {
                cimfile.saveFile(blob, filename);
            });
    }

    static createMultipartZip(jsonData, filename) {
        let fileMap = { components: {}};
        let zip = new JSZip();
        for (let file in jsonData) {
            let fileDataWithModel = jsonData[file];
            let xml = cimxml.getBaseXML(fileDataWithModel);
            let fileData = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + cimxml.getBaseXML(fileDataWithModel);
            if (!file.endsWith(".xml")) {
                file = file + ".xml";
            }
            zip.file(file, fileData);
        }
        cimfile.saveZip(zip, filename);
    }

    static doSave(data, filename) {
        cimfile.saveFile(data, filename);
    }

    static copyAttributeIntoComponent(destComponentList, srcComponent, componentId, profile, attr) {
        if (cimfile.checkAttributeBelongsToProfile(attr, profile)) {
            let componentExists = componentId in destComponentList;
            if (!componentExists)  {
                destComponentList[componentId] = { "pintura:rdfid" : componentId };
            }
            destComponentList[componentId][attr] = srcComponent[attr];
        }
    }

    static addToProfile(componentList, componentType, profile, data) {
        let profileExists = profile in data;
        if (!profileExists) {
            data[profile] = {};
        }
        if (componentType in data[profile]) {
            console.error("The component type: ", componentType, " already exists in profile: ", profile);
        }
        else {
            data[profile][componentType] = {};
            for (let component in componentList) {
                for (let attr in componentList[component]) {
                    if (attr == "about") {
                        for (let aboutAttr in componentList[component]["about"]) {
                            cimfile.copyAttributeIntoComponent(data[profile][componentType], componentList[component]["about"], component, profile, aboutAttr);
                        }
                    }
                    else {
                        cimfile.copyAttributeIntoComponent(data[profile][componentType], componentList[component], component, profile, attr);
                    }
                }
            }
        }
    }

    static checkAttributeBelongsToProfile(attributeName, profile) {
        let profiles = cgmes["src_CGMESProfile_js"];
        let profileValue = profiles["shortNames"][profile];
        let tokens = attributeName.substring(4).split(".");
        if (tokens.length == 2) {
            let nameInCGMESLibrary = "src_" + tokens[0] + "_js";
            if (nameInCGMESLibrary in cgmes) {
                if (tokens[1] in cgmes[nameInCGMESLibrary].possibleProfileList) {
                    if (cgmes[nameInCGMESLibrary].possibleProfileList[tokens[1]].includes(profileValue)) {
                        return true;
                    }
                }
                else {
                    console.error("Unaware of attribute: ", tokens[1], " in component type: ", tokens[0]);
                }
            }
        }
        return false;
    }

    static checkComponentBelongsInProfile(componentName, profileNumber) {
        let nameInCGMESLibrary = "src_" + componentName + "_js";
        if (nameInCGMESLibrary in cgmes) {
            if (cgmes[nameInCGMESLibrary].possibleProfileList["class"].includes(profileNumber)) {
                return true;
            }
        }
        return false;
    }

    static convertToMultipartZip(jsonData, filename) {
        let packageData = {};
        let profiles = cgmes["src_CGMESProfile_js"];
        for (let profileKey in profiles["shortNames"]) {
            let profileValue = profiles["shortNames"][profileKey];
            let d = new Date();

            for (let key in jsonData) {
                let nameInCGMESLibrary = "src_" + key.substring(4) + "_js";
                if (cimfile.checkComponentBelongsInProfile(key.substring(4), profileValue)) {
                    cimfile.addToProfile(jsonData[key], key, profileKey, packageData);
                }
            }
            if (profileKey in packageData) {
                let fullModel = {};
                fullModel["md:Model.created"] = d.getFullYear() +
                                   "-" + (d.getMonth() + 1) +
                                   "-" + d.getDate() +
                                   "T" + d.getHours() +
                                   ":" + d.getMinutes() +
                                   ":" + d.getSeconds();
                fullModel["md:Model.profile"] = profiles["profileUrls"][profileKey]
                packageData[profileKey]["md:FullModel"] = fullModel;
            }
        }
        cimfile.createMultipartZip(packageData, filename);
    }
}

export default cimfile;

