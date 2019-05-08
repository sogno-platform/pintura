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

class contextmenu {

    constructor(menu, label) {
        if (menu === undefined || menu === null) {
            console.error("Menu constructed with invalid node");
        }
        this.menuList = { [label]: menu };
        this.menuState = {};
        this.id;
        this.type;
    }

    keyUpListener(_window) {
        _window.onkeyup = (e)=> {
            if ( e.keyCode === 27 ) {
                this.toggleMenuOff();
            }
        };
    }

    /*
     * Toggles menu on.
     */
    toggleMenuOn(menuName) {
        if ( this.menuState[menuName] !== 1 ) {
            this.menuState[menuName] = 1;
            this.menuList[menuName].classList.add( contextmenu.contextMenuActive );
        }
    }

    /*
     * Toggles menu off.
     */
    toggleMenuOff() {
        for (let menu in this.menuList) {
            if ( this.menuState[menu] !== 0 ) {
                this.menuState[menu] = 0;
                this.menuList[menu].classList.remove( contextmenu.contextMenuActive );
            }
        }
    }

    /*
     * Positions the menu.
     */
    positionMenu(pos, menuName) {
        this.menuList[menuName].style.left = pos.x + "px";
        this.menuList[menuName].style.top = pos.y + "px";
    }

    setComponent(_type, _id) {
        this.type = _type;
        this.id = _id;
    }

    removeComponent() {
        currentCimsvg().removeComponent(this.type, this.id);
    }
}

contextmenu.contextMenuActive = "context-menu-active";

export default contextmenu;
