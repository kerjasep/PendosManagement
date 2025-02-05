import { h } from "@stencil/core";
export class SidebarItem {
    constructor() {
        this.icon = "";
        this.hasIcon = false;
        this.hasIconWrapper = false;
        this.href = "";
        this.internalHref = "";
        this.target = "_self";
        this.isExpandable = false;
        this.isNested = true;
        this.isSubMenuItem = false;
        this.numberIndicator = undefined;
        this.active = false;
        this.isActionItem = false;
        this.internalActiveState = false;
        this.value = "";
        this.handleItemClick = undefined;
    }
    handleActiveChange(newValue, oldValue) {
        // If the item is an action item, ignore the active prop
        if (this.isActionItem) {
            this.internalActiveState = false;
            return;
        }
        this.internalActiveState = newValue;
        if (newValue !== oldValue) {
            let labelElement = this.getNavItem(this.el.shadowRoot);
            if (!this.isExpandable && !newValue) {
                this.handleClassList(labelElement, 'remove', 'active');
            }
            if (!this.isExpandable && newValue) {
                this.handleClassList(labelElement, 'add', 'active');
            }
        }
    }
    handleConsoleError(event) {
        if (event.detail) {
            this.hasIcon = false;
        }
        else {
            this.hasIcon = true;
        }
    }
    handleEventEmission() {
        // Get the active item section
        this.ifxSidebarMenu.emit(this.el);
    }
    handleClassList(el, type, className) {
        el.classList[type](className);
        if (type === 'contains') {
            return el.classList.contains(className);
        }
    }
    getExpandableMenu() {
        const expandableSubmenu = this.el.shadowRoot.querySelector('.expandable__submenu');
        return expandableSubmenu;
    }
    getNavItem(el) {
        return el === null || el === void 0 ? void 0 : el.querySelector('.sidebar__nav-item');
    }
    getSidebarMenuItems(el = this.el) {
        const sidebarItems = el.querySelectorAll('ifx-sidebar-item');
        if (sidebarItems.length === 0) {
            return el.shadowRoot.querySelectorAll('ifx-sidebar-item');
        }
        return sidebarItems;
    }
    getSidebarMenuItem() {
        const sidebarItem = this.el.shadowRoot.querySelector('.sidebar__nav-item');
        return sidebarItem;
    }
    toggleSubmenu() {
        if (this.isExpandable) {
            const menuItem = this.getSidebarMenuItem();
            const expandableMenu = this.getExpandableMenu();
            this.handleClassList(expandableMenu, 'toggle', 'open');
            this.handleClassList(menuItem, 'toggle', 'open');
            // Emit an event with the current component
            this.handleEventEmission();
        }
        else {
            // If the sidebar item is not expandable, it's a leaf item without a submenu.
            // Emit an event to the parent `ifx-sidebar` component to notify it that a leaf item has been clicked.
            if (this.isActionItem) { //its an action item that eg opens an overlay etc and should not influence the active state of the item
                this.ifxSidebarActionItem.emit(this.el); // emit new event if isActionItem is true
                return;
            }
            else { //its a navigation item which becomes active after clicking it
                this.handleActiveChange(true, this.internalActiveState);
                this.ifxSidebarNavigationItem.emit(this.el);
            }
            // If the sidebar item is selectable (not expandable), then call the handler function with the current element.
            if (this.handleItemClick) {
                this.handleItemClick(this.el);
            }
        }
        // // Emit an event with the current component
        // this.handleEventEmission();
    }
    handleExpandableMenu(sidebarItems) {
        const sidebarExpandableMenu = this.getExpandableMenu();
        sidebarItems.forEach((el) => {
            const li = document.createElement('li');
            li.appendChild(el);
            sidebarExpandableMenu.appendChild(li);
        });
    }
    parentElementIsSidebar() {
        const parentElement = this.el.parentElement;
        if (parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR') {
            return true;
        }
        else
            return false;
    }
    checkIfMenuItemIsNested() {
        const parentIsSidebar = this.parentElementIsSidebar();
        if (parentIsSidebar) {
            this.isNested = false;
        }
    }
    checkIfMenuItemIsSubMenu() {
        const parentElement = this.el.parentElement;
        const navItem = this.getNavItem(parentElement.shadowRoot);
        if (parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR-ITEM' && !this.handleClassList(navItem, 'contains', 'header__section')) {
            this.isSubMenuItem = true;
        }
        else {
            this.isSubMenuItem = false;
        }
    }
    isActive(iteratedComponent) {
        const activeAttributeValue = iteratedComponent.getAttribute('active');
        const isActive = activeAttributeValue === 'true';
        return isActive;
    }
    getParentSection(el) {
        let parentElement = el.parentElement;
        while (parentElement && parentElement.tagName.toUpperCase() !== 'IFX-SIDEBAR') {
            if (parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR-ITEM') {
                return parentElement;
            }
            parentElement = parentElement.parentElement;
        }
        return null;
    }
    handleBorderIndicatorDisplacement(menuItem) {
        // Recursive function to handle each item
        const handleItem = (item, menuItem) => {
            const isActive = this.isActive(item);
            if (isActive) {
                const isOpen = this.handleClassList(menuItem, 'contains', 'open');
                const activeMenuItemSection = this.getActiveItemSection();
                if (!isOpen) {
                    this.handleClassList(activeMenuItemSection, 'add', 'active-section');
                }
                else {
                    this.handleClassList(activeMenuItemSection, 'remove', 'active-section');
                }
            }
            // Process each child item
            const children = this.getSidebarMenuItems(item);
            children.forEach((child) => handleItem(child, menuItem));
        };
        // Start with the top-level items
        const topLevelItems = this.getSidebarMenuItems();
        topLevelItems.forEach((item) => handleItem(item, menuItem));
    }
    setHref() {
        if (this.href.toLowerCase().trim() === "") {
            this.internalHref = undefined;
        }
        else
            this.internalHref = this.href;
    }
    getActiveItemSection() {
        const parentIsSidebar = this.parentElementIsSidebar();
        if (parentIsSidebar) {
            const labelElement = this.getNavItem(this.el.shadowRoot);
            return labelElement;
        }
        else {
            const labelElement = this.getNavItem(this.el.shadowRoot);
            return labelElement;
        }
    }
    async setActiveClasses() {
        const activeMenuItem = this.getNavItem(this.el.shadowRoot);
        this.handleClassList(activeMenuItem, 'add', 'active');
    }
    async expandMenu(ac) {
        const menuItem = this.getSidebarMenuItem();
        const expandableMenu = this.getExpandableMenu();
        this.handleClassList(expandableMenu, 'add', 'open');
        this.handleClassList(menuItem, 'add', 'open');
        if (ac) {
            this.handleClassList(expandableMenu, 'remove', 'active-section');
            this.handleClassList(menuItem, 'remove', 'active-section');
        }
    }
    async isItemExpandable() {
        return this.isExpandable;
    }
    handleActiveState() {
        if (this.internalActiveState) {
            this.setActiveClasses();
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.toggleSubmenu();
        }
    }
    componentDidLoad() {
        this.handleActiveState();
        if (this.isExpandable) {
            const sidebarItems = this.getSidebarMenuItems();
            this.handleExpandableMenu(sidebarItems);
        }
    }
    componentWillLoad() {
        this.internalActiveState = this.active;
        this.checkIfMenuItemIsNested();
        this.checkIfMenuItemIsSubMenu();
        this.setHref();
        const sidebarItems = this.getSidebarMenuItems();
        if (sidebarItems.length !== 0) {
            this.isExpandable = true;
        }
        else {
            this.isExpandable = false;
        }
    }
    componentWillUpdate() {
        // If the active prop has been set to true and the internalActiveState has not been set to true yet
        if (this.active && !this.internalActiveState) {
            // Set the internal active state to true
            this.internalActiveState = this.active;
            // Emit the event to notify the parent Sidebar
            this.ifxSidebarNavigationItem.emit(this.el);
        }
    }
    render() {
        return (h("div", { key: '757062b6fa740b601999e75dee41474e0ba59a84' }, h("a", { key: 'ab012b6869bf58168fc918f55270cf8496bbfa2d', tabIndex: 1, onKeyDown: (event) => this.handleKeyDown(event), href: this.internalHref, onClick: () => this.toggleSubmenu(), target: this.target, class: `sidebar__nav-item ${!this.isNested && this.isExpandable ? 'header__section' : ""} ${this.isSubMenuItem ? 'submenu__item' : ""}` }, this.icon &&
            h("div", { class: `sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}` }, h("ifx-icon", { icon: this.icon })), h("div", { key: 'beb4b9889b81b054b2f96132d0dbed15e29e57a0', class: "sidebar__nav-item-label" }, h("slot", { key: '877e1dceb6e7c5fbac6185ed1d68f769a6aa658f' })), h("div", { key: '93463e2749b097d6cae79a6386b10a584c933fcc', class: "sidebar__nav-item-indicator" }, this.isExpandable &&
            h("span", { class: 'item__arrow-wrapper' }, h("ifx-icon", { icon: "chevron-down-12" })), !this.isExpandable && !this.isNested &&
            h("span", { class: 'item__number-indicator' }, h("ifx-number-indicator", null, this.numberIndicator)))), this.isExpandable && h("ul", { class: 'expandable__submenu' })));
    }
    static get is() { return "ifx-sidebar-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["sidebar-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["sidebar-item.css"]
        };
    }
    static get properties() {
        return {
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
            "numberIndicator": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "number-indicator",
                "reflect": false
            },
            "active": {
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
                "attribute": "active",
                "reflect": false,
                "defaultValue": "false"
            },
            "isActionItem": {
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
                "attribute": "is-action-item",
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "handleItemClick": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(item: HTMLElement) => void",
                    "resolved": "(item: HTMLElement) => void",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "hasIcon": {},
            "hasIconWrapper": {},
            "internalHref": {},
            "isExpandable": {},
            "isNested": {},
            "isSubMenuItem": {},
            "internalActiveState": {}
        };
    }
    static get events() {
        return [{
                "method": "ifxSidebarMenu",
                "name": "ifxSidebarMenu",
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
            }, {
                "method": "ifxSidebarNavigationItem",
                "name": "ifxSidebarNavigationItem",
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
            }, {
                "method": "ifxSidebarActionItem",
                "name": "ifxSidebarActionItem",
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
            "setActiveClasses": {
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
            "expandMenu": {
                "complexType": {
                    "signature": "(ac: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "ac",
                            "type": "boolean",
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
            "isItemExpandable": {
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
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "handleActiveChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "consoleError",
                "method": "handleConsoleError",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=sidebar-item.js.map
