/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  A copy of the GNU General Public License is in the LICENSE file
 *  in the top level directory of this source tree.
 */

import cimxml from "./cimxml.js";
import JSZip from "jszip";
import packageIndex from "./packageIndex.js";
class cimfile {

    static addToFileMap(fileData, fileName, fileMap){
        let fileExists = fileName in fileMap;
        if (fileExists) {
            let tmp = Object.assign(fileMap[fileName], fileData);
            fileMap[fileName] = tmp;
        }
        else {
            fileMap[fileName] = fileData;
        }
    }

    static addToPackage(data, key, pack, packageData) {
        let packExists = pack in packageData;
        if (!packExists) {
            packageData[pack] = {};
        }
        packageData[pack][key] = data;
    }

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
                oReq.onreadystatechange = function (oEvent) {
                    if (oReq.readyState === 4) {
                        if (oReq.status != 200) {
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
        }).then(res=>res.text())
            .then(res => { let json = JSON.parse(res); });
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

    static createMultipartZip(jsonData, fullModel, filename) {
        let fileMap = { components: {}};
        let zip = new JSZip();
        for(let packageName in jsonData) {
            cimfile.addToFileMap(jsonData[packageName], packageName, fileMap["components"]);
        }
        for (let file in fileMap["components"]) {
            let fileDataWithModel = fileMap["components"][file];
            fileDataWithModel["md:FullModel"] = fullModel;
            let fileData = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + cimxml.getBaseXML(fileDataWithModel);
            zip.file(file, fileData);
        }
        cimfile.saveZip(zip, filename);
    }

    static doSave(data, filename) {
        cimfile.saveFile(data, filename);
    }

    static convertToMultipartZip(jsonData, filename) {
        let packageData = {};
        let fullModel = {};
        for (let key in jsonData) {
            let pack = packageIndex[key.substring(4)][0];
            if (pack) {
                cimfile.addToPackage(jsonData[key], key, pack, packageData);
            }
            else {
                console.error("Could not find " + key + " in packageIndex.");
            }
        }
        let d = new Date();
        fullModel["md:Model.created"] = d.getFullYear() +
                               "-" + (d.getMonth() + 1) +
                               "-" + d.getDate() +
                               "T" + d.getHours() +
                               ":" + d.getMinutes() +
                               ":" + d.getSeconds();
        cimfile.createMultipartZip(packageData, fullModel, filename);
    }
}

export default cimfile;

