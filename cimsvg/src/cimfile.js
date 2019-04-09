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

import cimxml from './cimxml.js';
import packageIndex from './packageIndex.js';
class cimfile {

    static addToPackage(data, pack, packageData) {
        let packExists = pack in packageData;
        if (!packExists) {
            packageData[pack] = [];
        }
        else {
        }
        packageData[pack].push(data);
    };

    static saveFile(data, filename="pinturaGrid.xml") {
        let filesave = document.getElementById("filesave")
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', filename);
        element.style.display = 'none';
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
            oReq.setRequestHeader('Accept', 'text/plain')
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
    };

    static uploadAsText(xml, uri) {
        fetch(uri, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'text/plain'
          },
          body: xml
        }).then(res=>res.text())
          .then(res => { let json = JSON.parse(res); });
    };

    static convertToMultipartZip(data, filename="pinturaGrid.zip") {
        let packageData = {};
        let dom = cimxml.getDOM(data);
        let node = dom.documentElement.firstChild;
        let serializer = cimxml.getXMLSerializer();
        while (node.nextSibling) {
            if (cimxml.isElementNode(node.nodeType)) {
                let data = serializer.serializeToString(node);
                let pack = packageIndex[node.nodeName.substring(4)]
                if (pack) {
                    cimfile.addToPackage(data, pack, packageData);
                }
                else {
                    console.log("Could not find " + node.nodeName + " in packageIndex.");
                    console.log(data)
                }
            }
            node = node.nextSibling;
        }
        console.log(packageData)
    }
};

export default cimfile

