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

let urlTokens = window.location.href.split("?");
let pairs = urlTokens.slice(1);
let params = {};
for (let index in pairs) {
    let pair = pairs[index];
    let param = pair.split("=");
    if (param.length === 2){
        params[param[0]] = param[1];
    }
}
if ("uri" in params){
    let uri=params["uri"];
    currentCimsvg().downloadUri(uri);
}

let body = document.querySelector("body");
if (body !== undefined) {
    currentCimsvg().addEventListeners(body);
    currentCimmenu().addEventListeners(document);
}


