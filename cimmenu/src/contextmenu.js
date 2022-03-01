/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
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
        this.cimsvg = null;
    }

    setCimsvg(cimsvg) {
        this.cimsvg = cimsvg;
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
        if (this.cimsvg) {
            this.cimsvg.removeComponent(this.type, this.id);
        }
    }
}

contextmenu.contextMenuActive = "context-menu-active";

export default contextmenu;
