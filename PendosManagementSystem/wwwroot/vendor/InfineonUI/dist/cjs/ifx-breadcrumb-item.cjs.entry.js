'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const breadcrumbItemCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}";
const IfxBreadcrumbItemStyle0 = breadcrumbItemCss;

const BreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isLastItem = false;
    }
    handleOutsideClick(event) {
        const path = event.composedPath();
        if (!path.includes(this.el)) {
            this.closeDropdownMenu();
        }
    }
    getDropdownMenu() {
        const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
        return dropdownMenu;
    }
    menuWrapperEventReEmitter(event) {
        this.emittedElement = event.detail;
    }
    getMenuIconWrapper() {
        return this.emittedElement;
    }
    handleClassList(el, type, className) {
        el.classList[type](className);
    }
    closeDropdownMenu() {
        const dropdownMenu = this.getDropdownMenu();
        const menuWrapper = this.getMenuIconWrapper();
        this.handleClassList(dropdownMenu, 'remove', 'open');
        this.handleClassList(menuWrapper, 'remove', 'show');
    }
    toggleDropdownMenu() {
        const dropdownMenu = this.getDropdownMenu();
        const menuWrapper = this.getMenuIconWrapper();
        this.handleClassList(dropdownMenu, 'toggle', 'open');
        this.handleClassList(menuWrapper, 'toggle', 'show');
    }
    handleLastItem() {
        const breadcrumbItems = this.el.closest('ifx-breadcrumb').querySelectorAll('ifx-breadcrumb-item');
        if (this.el === breadcrumbItems[breadcrumbItems.length - 1]) {
            this.isLastItem = true;
        }
        else
            this.isLastItem = false;
    }
    componentWillLoad() {
        this.handleLastItem();
    }
    componentDidUpdate() {
        this.handleLastItem();
    }
    componentDidLoad() {
        const dropdownMenu = this.el.querySelector('ifx-dropdown-menu');
        if (!dropdownMenu) {
            const iconMenuWrapper = this.getMenuIconWrapper();
            this.handleClassList(iconMenuWrapper, 'toggle', 'hide');
        }
        else {
            dropdownMenu.isOpen = true;
        }
    }
    render() {
        return (index.h("li", { key: '2ea597469fc69b442bc2467814ae4033a97fac75', class: 'breadcrumb-parent', "aria-current": `${this.isLastItem ? 'page' : ""}`, onClick: () => this.toggleDropdownMenu() }, index.h("li", { key: '24ddee6b25ea7d32668cc5d09a3e27b61236f834', class: "breadcrumb-wrapper" }, index.h("slot", { key: 'cc58eac4b526be9bcf006de50f4517da942733e3', name: 'label' }), index.h("div", { key: '829615059e607d599c1f30b2334f4a998803dc30', class: "dropdown-menu" }, index.h("slot", { key: 'f974f32c5452c8eaaef978891b176e6078c7296d' }))), !this.isLastItem && index.h("span", { class: "breadcrumb-divider" }, "/")));
    }
    get el() { return index.getElement(this); }
};
BreadcrumbItem.style = IfxBreadcrumbItemStyle0;

exports.ifx_breadcrumb_item = BreadcrumbItem;

//# sourceMappingURL=ifx-breadcrumb-item.cjs.entry.js.map