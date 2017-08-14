 /*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston, Georg Reinke
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

/*
 * Different method of getting DOM required for some platforms
 */
var getDOM = function(text) {
    let newDoc;
    if ( window.DOMParser ) {
        newDoc = ( new DOMParser() ).parseFromString( text, "application/xml" );
    }
    else if( window.ActiveXObject ) {
        let xmlObject = new ActiveXObject( "Microsoft.XMLDOM" );
        xmlObject.async = false;
        xmlObject.loadXML( text );
        newDoc = xmlObject;
        xmlObject = undefined;
    }
    else {
        throw new Error( "Cannot find an XML parser!" );
    }
    return newDoc;
};

