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

var cimcontextmenu = cimcontextmenu || (function() {

    var contextMenuActive = "context-menu-active";
    var menuList = {};
    var menuState = {};
    var id;
    var type;

    /*
     * Initialise our application's code.
     */
    const init = function(menu, label) {
        menuList[label] = menu;
    }

    const keyUpListener = function(_window) {
        _window.onkeyup = function(e) {
            if ( e.keyCode === 27 ) {
                toggleMenuOff();
            }
        }
    }

    /*
     * Window resize event listener
     */
    const resizeListener = function(_window) {
        _window.onresize = function(e) {
            toggleMenuOff();
        };
    }

    /*
     * Toggles menu on.
     */
    const toggleMenuOn = function(menuName) {
        if ( menuState[menuName] !== 1 ) {
            menuState[menuName] = 1;
            menuList[menuName].classList.add( contextMenuActive );
        }
    }

    /*
     * Toggles menu off.
     */
    const toggleMenuOff = function() {
        for (let menu in menuList) {
            if ( menuState[menu] !== 0 ) {
                menuState[menu] = 0;
                menuList[menu].classList.remove( contextMenuActive );
            }
        }
    }

    /*
     * Positions the menu.
     */
    const positionMenu = function(pos, menuName) {
        menuList[menuName].style.left = pos.x + "px";
        menuList[menuName].style.top = pos.y + "px";
    }

    const setComponent = function(_type, _id) {
        type = _type;
        id = _id;
    }

    const removeComponent = function() {
        cimsvgClass.removeComponent(type, id);
    }

    return {
        init,
        keyUpListener,
        removeComponent,
        resizeListener,
        setComponent,
        toggleMenuOn,
        toggleMenuOff,
        positionMenu,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimcontextmenu;
}
