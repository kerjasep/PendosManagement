'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const sidebarItemCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer;font-family:var(--ifx-font-family)}.sidebar__nav-item.extra-padding__bottom{padding:8px 0px 16px 0px}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:\"\";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open{padding:8px 0px}.sidebar__nav-item.open .sidebar__nav-item-label{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:16px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.no-top-border{border-top:none}.sidebar__nav-item.header__section.active-section::before{content:\"\";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open{padding:16px 0px 8px 0px}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item.submenu__item{padding:4px 0px}.sidebar__nav-item.submenu__item.extra-padding__bottom{padding:4px 0px 16px 0px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:40px}.expandable__submenu.open{display:flex}.header__section+.expandable__submenu{padding-left:0}";
const IfxSidebarItemStyle0 = sidebarItemCss;

const SidebarItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ifxSidebarMenu = index.createEvent(this, "ifxSidebarMenu", 7);
        this.ifxSidebarNavigationItem = index.createEvent(this, "ifxSidebarNavigationItem", 7);
        this.ifxSidebarActionItem = index.createEvent(this, "ifxSidebarActionItem", 7);
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
        return (index.h("div", { key: '757062b6fa740b601999e75dee41474e0ba59a84' }, index.h("a", { key: 'ab012b6869bf58168fc918f55270cf8496bbfa2d', tabIndex: 1, onKeyDown: (event) => this.handleKeyDown(event), href: this.internalHref, onClick: () => this.toggleSubmenu(), target: this.target, class: `sidebar__nav-item ${!this.isNested && this.isExpandable ? 'header__section' : ""} ${this.isSubMenuItem ? 'submenu__item' : ""}` }, this.icon &&
            index.h("div", { class: `sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}` }, index.h("ifx-icon", { icon: this.icon })), index.h("div", { key: 'beb4b9889b81b054b2f96132d0dbed15e29e57a0', class: "sidebar__nav-item-label" }, index.h("slot", { key: '877e1dceb6e7c5fbac6185ed1d68f769a6aa658f' })), index.h("div", { key: '93463e2749b097d6cae79a6386b10a584c933fcc', class: "sidebar__nav-item-indicator" }, this.isExpandable &&
            index.h("span", { class: 'item__arrow-wrapper' }, index.h("ifx-icon", { icon: "chevron-down-12" })), !this.isExpandable && !this.isNested &&
            index.h("span", { class: 'item__number-indicator' }, index.h("ifx-number-indicator", null, this.numberIndicator)))), this.isExpandable && index.h("ul", { class: 'expandable__submenu' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "active": ["handleActiveChange"]
    }; }
};
SidebarItem.style = IfxSidebarItemStyle0;

exports.ifx_sidebar_item = SidebarItem;

//# sourceMappingURL=ifx-sidebar-item.cjs.entry.js.map