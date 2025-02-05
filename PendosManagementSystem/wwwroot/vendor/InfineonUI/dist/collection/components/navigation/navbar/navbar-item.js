import { h } from "@stencil/core";
export class NavbarItem {
    constructor() {
        this.showLabel = true;
        this.icon = "";
        this.href = "";
        this.target = "_self";
        this.hideOnMobile = true;
        this.internalHref = "";
        this.isMenuItem = false;
        this.hasChildNavItems = false;
        this.isSidebarMenuItem = false;
        this.itemPosition = undefined;
    }
    handleOutsideClick(event) {
        const path = event.composedPath();
        const itemMenu = this.getItemMenu();
        if (itemMenu) {
            if (itemMenu.classList.contains('open')) {
                if (!path.includes(this.el)) {
                    this.closeItemMenu();
                }
            }
        }
    }
    async hideComponent() {
        this.el.style.display = 'none';
    }
    async showComponent() {
        this.el.style.display = '';
    }
    async toggleChildren(action) {
        const itemMenu = this.getItemMenu();
        const arrowIcon = this.getChevronDownIconWrapper();
        if (itemMenu) {
            this.handleClassList(arrowIcon, action, 'hide');
            this.handleClassList(itemMenu, action, 'itemInMobileMenu');
        }
    }
    async moveChildComponentsIntoSubLayerMenu() {
        const subLayerMenu = this.getItemMenu();
        if (subLayerMenu) {
            const subLayerMenuIsOpened = this.handleClassList(subLayerMenu, 'contains', 'open');
            if (subLayerMenuIsOpened) {
                const navbarItem = this.getNavBarItem();
                const subLayerBackButton = this.getSubLayerBackButton();
                this.handleClassList(navbarItem, 'add', 'layer__item-parent');
                this.handleClassList(subLayerBackButton, 'add', 'show');
                this.ifxNavItem.emit({ component: this.el, action: 'hideFirstLayer' });
            }
        }
        const navItems = this.el.querySelectorAll('[slot="first__layer"]');
        this.isSidebarMenuItem = true;
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].setAttribute('slot', 'second__layer');
            navItems[i].moveChildComponentsIntoSubLayerMenu();
        }
    }
    getSubLayerBackButton() {
        const sublayerBackButton = this.el.shadowRoot.querySelector('.sub__layer-back-button');
        return sublayerBackButton;
    }
    async toggleFirstLayerItem(actionOne, actionTwo) {
        const navbarItem = this.getNavBarItem();
        const secondLayerMenu = this.getSubLayerMenu();
        const subLayerBackButton = this.getSubLayerBackButton();
        this.handleClassList(subLayerBackButton, [actionOne], 'show');
        this.handleClassList(navbarItem, [actionTwo], 'hide');
        this.handleClassList(secondLayerMenu, [actionTwo], 'remove__margin');
    }
    openSubLayerMenu() {
        if (this.hasChildNavItems) {
            const subLayerBackButton = this.getSubLayerBackButton();
            const rightArrowIcon = this.getRightArrowIcon();
            const navbarItem = this.getNavBarItem();
            const subLayerMenu = this.getSubLayerMenu();
            const slotName = this.el.getAttribute('slot');
            this.handleClassList(subLayerBackButton, 'add', 'show');
            this.handleClassList(rightArrowIcon, 'add', 'hide');
            this.handleClassList(navbarItem, 'add', 'layer__item-parent');
            this.handleClassList(subLayerMenu, 'add', 'open');
            if (slotName.toLowerCase() === 'second__layer') {
                this.ifxNavItem.emit({ component: this.el, parent: this.el.parentElement, action: 'hideSecondLayer' });
                this.handleClassList(navbarItem, 'remove', 'menuItem');
            }
            else {
                this.ifxNavItem.emit({ component: this.el, action: 'hideFirstLayer' });
            }
        }
    }
    async addMenuItemClass() {
        const navbarItem = this.getNavBarItem();
        this.handleClassList(navbarItem, 'add', 'menuItem');
        const rightArrowIcon = this.getRightArrowIcon();
        if (this.hasChildNavItems) {
            this.handleClassList(rightArrowIcon, 'remove', 'hide');
        }
    }
    async moveChildComponentsBackIntoNavbar() {
        const subLayerBackButton = this.getSubLayerBackButton();
        const navbarItem = this.getNavBarItem();
        const secondLayerMenu = this.getSubLayerMenu();
        this.handleClassList(subLayerBackButton, 'remove', 'show');
        this.handleClassList(navbarItem, 'remove', 'layer__item-parent');
        this.handleClassList(secondLayerMenu, 'remove', 'remove__margin');
        this.ifxNavItem.emit({ component: this.el, action: 'show' });
        const navItems = this.el.querySelectorAll('[slot="second__layer"]');
        this.isSidebarMenuItem = false;
        this.showComponent();
        this.handleClassList(navbarItem, 'remove', 'hide');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].setAttribute('slot', 'first__layer');
            navItems[i].moveChildComponentsBackIntoNavbar();
            navItems[i].addMenuItemClass();
            navItems[i].returnToFirstLayer();
        }
    }
    getRightArrowIcon() {
        const menuItemRightIconWrapper = this.el.shadowRoot.querySelector('.menuItemRightIconWrapper');
        return menuItemRightIconWrapper;
    }
    getChevronDownIconWrapper() {
        const arrowIcon = this.el.shadowRoot.querySelector('.navItemIconWrapper');
        return arrowIcon;
    }
    async returnToFirstLayer() {
        const subLayerBackButton = this.getSubLayerBackButton();
        const navbarItem = this.getNavBarItem();
        const rightArrowIcon = this.getRightArrowIcon();
        const subLayerMenu = this.getSubLayerMenu();
        const slotName = this.el.getAttribute('slot');
        this.handleClassList(subLayerBackButton, 'remove', 'show');
        this.handleClassList(navbarItem, 'remove', 'layer__item-parent');
        this.handleClassList(subLayerMenu, 'remove', 'open');
        if (this.hasChildNavItems) {
            this.handleClassList(rightArrowIcon, 'remove', 'hide');
        }
        if (slotName.toLowerCase() === 'second__layer') {
            this.ifxNavItem.emit({ component: this.el, parent: this.el.parentElement, action: 'returnToSecondLayer' });
            this.handleClassList(navbarItem, 'add', 'menuItem');
        }
        else {
            this.ifxNavItem.emit({ component: this.el, action: 'return' });
        }
    }
    componentWillLoad() {
        this.setHref();
        this.checkIfItemIsNested();
        this.checkIfItemHasChildren();
    }
    componentDidLoad() {
        if (this.hasChildNavItems) {
            const navItems = this.getNavbarItems();
            this.relocateItemsToFirstlayer(navItems);
        }
    }
    componentDidUpdate() {
        const navbarItem = this.getNavBarItem();
        const isLayerItemParent = this.handleClassList(navbarItem, 'contains', 'layer__item-parent');
        if (this.isSidebarMenuItem && isLayerItemParent) {
            const rightArrowIcon = this.getRightArrowIcon();
            this.handleClassList(rightArrowIcon, 'add', 'hide');
        }
    }
    async setMenuItemPosition() {
        if (this.isMenuItem && this.hasChildNavItems) {
            const menuPosition = this.getItemMenuPosition();
            if (menuPosition === 'left') {
                this.itemPosition = 'left';
            }
            else if (menuPosition === 'right') {
                this.itemPosition = 'right';
            }
        }
    }
    handleClassList(el, type, className) {
        el.classList[type](className);
        if (type === 'contains') {
            return el.classList.contains(className);
        }
    }
    getNavbarItems() {
        const navItems = this.el.querySelectorAll('ifx-navbar-item');
        return navItems;
    }
    getNavBarItem() {
        const navItem = this.el.shadowRoot.querySelector('.navbar__item');
        return navItem;
    }
    getSubLayerMenu() {
        const subLayerMenu = this.el.shadowRoot.querySelector('.sub__layer-menu');
        return subLayerMenu;
    }
    relocateItemsToFirstlayer(navItems) {
        navItems.forEach(item => {
            item.setAttribute('slot', 'first__layer');
        });
    }
    setHref() {
        if (this.href.toLowerCase().trim() === "") {
            this.internalHref = undefined;
        }
        else
            this.internalHref = this.href;
    }
    checkIfItemIsNested() {
        const parentElement = this.el.parentElement;
        if (parentElement.tagName.toUpperCase() === 'IFX-NAVBAR-ITEM'
            || parentElement.tagName.toUpperCase() === 'IFX-NAVBAR-PROFILE') {
            this.isMenuItem = true;
            return;
        }
        else {
            this.isMenuItem = false;
        }
    }
    checkIfItemHasChildren() {
        const sidebarItems = this.getNavbarItems();
        if (sidebarItems.length !== 0) {
            this.hasChildNavItems = true;
        }
        else {
            this.hasChildNavItems = false;
        }
    }
    async setItemSideSpecifications() {
        const menuItem = this.el;
        const itemMenu = this.getItemMenu();
        const slotValue = menuItem.getAttribute('slot');
        if (slotValue.toLowerCase().trim() === "right-item") {
            this.handleClassList(itemMenu, 'add', 'rightSideItemMenu');
        }
        return true;
    }
    getItemMenu() {
        const menu = this.el.shadowRoot.querySelector('.navbar-menu');
        return menu;
    }
    closeItemMenu() {
        const itemMenu = this.getItemMenu();
        const menuItem = this.getNavBarItem();
        if (itemMenu) {
            this.handleClassList(itemMenu, 'remove', 'open');
            this.handleClassList(menuItem, 'remove', 'open');
        }
    }
    getItemMenuPosition() {
        let parentElement = this.el;
        while (parentElement) {
            if (parentElement.tagName === 'IFX-NAVBAR-PROFILE' || parentElement.slot === 'right-item') {
                return 'left';
            }
            parentElement = parentElement.parentElement || parentElement.getRootNode().host;
        }
        return 'right';
    }
    toggleItemMenu() {
        const slotName = this.el.getAttribute('slot');
        if (slotName.toLowerCase() === 'mobile-menu-top' || slotName.toLowerCase() === 'second__layer') {
            this.openSubLayerMenu();
        }
        if (!this.internalHref && slotName.toLowerCase() !== 'mobile-menu-top' && slotName.toLowerCase() !== 'second__layer') {
            const itemMenu = this.getItemMenu();
            if (this.hasChildNavItems) {
                const menuItem = this.getNavBarItem();
                this.handleClassList(itemMenu, 'toggle', 'open');
                this.handleClassList(menuItem, 'toggle', 'open');
            }
        }
    }
    handleNestedLayerMenu(e) {
        if (this.isMenuItem && this.hasChildNavItems && !this.isSidebarMenuItem) {
            const itemMenu = this.getItemMenu();
            const menuPosition = this.getItemMenuPosition();
            if (e.type.toUpperCase() === 'MOUSEENTER') {
                this.handleClassList(itemMenu, 'add', 'open');
                if (menuPosition === 'left') {
                    this.handleClassList(itemMenu, 'add', 'left');
                }
                else if (menuPosition === 'right') {
                    this.handleClassList(itemMenu, 'add', 'right');
                }
            }
            if (e.type.toUpperCase() === 'MOUSELEAVE') {
                this.handleClassList(itemMenu, 'remove', 'open');
                if (menuPosition === 'left') {
                    this.handleClassList(itemMenu, 'remove', 'left');
                }
                else if (menuPosition === 'right') {
                    this.handleClassList(itemMenu, 'remove', 'right');
                }
            }
        }
    }
    render() {
        return (h("div", { key: 'd3edcbe9d05b4c6b8f1d5cadea3da5acbaa4531a', class: "container", onMouseLeave: e => this.handleNestedLayerMenu(e), onMouseEnter: e => this.handleNestedLayerMenu(e) }, h("div", { key: 'cbbd0aca26d687e81f935207fc54ed3dcca19f71', class: "sub__layer-back-button" }, h("div", { key: '5ed5020694bb77f12427b08e974dd92184b742aa', class: "back__button-wrapper", onClick: () => this.returnToFirstLayer() }, h("ifx-icon", { key: 'ea32f4e13dc2cf8a9fcf55873df276c7f10914cd', icon: "arrow-left-16" }), h("span", { key: '57c1c2cde3050b571ed96f553dd07f26ed1cdcb8' }, "Back"))), h("a", { key: '13b1b74da717e40238c6dea43a4811989fe30540', href: this.internalHref, target: this.target, onClick: () => this.toggleItemMenu(), class: `navbar__item ${this.isSidebarMenuItem ? 'sidebarMenuItem' : ""} ${!this.showLabel ? 'removeLabel' : ""} ${this.isMenuItem ? 'menuItem' : ""} ${this.hasChildNavItems ? 'isParent' : ""}` }, h("div", { key: 'f3df2ab377b8aff412a7a8aacdf55450c20bc3c4', class: "inner__content-wrapper" }, h("div", { key: '7ff654399c1ed0a2184df48fb492cd1b3d289710', class: `navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon ? "removeWrapper" : ""}` }, this.icon && h("ifx-icon", { icon: this.icon })), this.itemPosition === 'left'
            && this.hasChildNavItems
            && this.isMenuItem &&
            h("div", { class: "menuItemLeftIconWrapper" }, h("ifx-icon", { icon: "chevron-left-12" })), h("span", { key: '7daf323171e81fc5618a515ca4609d7aba97d097', class: "label__wrapper" }, h("slot", { key: '3451522e360b39d320389f0169ddc49addd78f56' }))), h("div", { key: '97ede4b2db2c6b2047da4fcacb69f2c1306d26b0', class: `navItemIconWrapper ${this.hasChildNavItems && !this.isMenuItem && !this.isSidebarMenuItem ? '' : "hide"}` }, h("ifx-icon", { key: '7a852df1e61f3f09249ce0b6c1fd85cfd9829690', icon: "chevron-down-12" })), h("div", { class: `menuItemRightIconWrapper ${((this.itemPosition === 'right' && this.hasChildNavItems && this.isMenuItem) || (this.isSidebarMenuItem && this.hasChildNavItems)) ? '' : "hide"}` }, h("ifx-icon", { icon: "chevron-right-12" }))), this.hasChildNavItems && !this.isSidebarMenuItem && h("ul", { class: 'navbar-menu' }, " ", h("slot", { name: "first__layer" }), " "), this.isSidebarMenuItem && h("ul", { class: 'sub__layer-menu' }, " ", h("slot", { name: "second__layer" }), " ")));
    }
    static get is() { return "ifx-navbar-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar-item.css"]
        };
    }
    static get properties() {
        return {
            "showLabel": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-label",
                "reflect": false,
                "defaultValue": "true"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "href",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "\"_self\""
            },
            "hideOnMobile": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hide-on-mobile",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "internalHref": {},
            "isMenuItem": {},
            "hasChildNavItems": {},
            "isSidebarMenuItem": {},
            "itemPosition": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxNavItem",
                "name": "ifxNavItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "hideComponent": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "showComponent": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "toggleChildren": {
                "complexType": {
                    "signature": "(action: any) => Promise<void>",
                    "parameters": [{
                            "name": "action",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "moveChildComponentsIntoSubLayerMenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "toggleFirstLayerItem": {
                "complexType": {
                    "signature": "(actionOne: any, actionTwo: any) => Promise<void>",
                    "parameters": [{
                            "name": "actionOne",
                            "type": "any",
                            "docs": ""
                        }, {
                            "name": "actionTwo",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "addMenuItemClass": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "moveChildComponentsBackIntoNavbar": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "returnToFirstLayer": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setMenuItemPosition": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setItemSideSpecifications": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleOutsideClick",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=navbar-item.js.map
