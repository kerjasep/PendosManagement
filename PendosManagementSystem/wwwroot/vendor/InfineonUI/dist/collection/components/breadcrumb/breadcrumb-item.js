import { h } from "@stencil/core";
export class BreadcrumbItem {
    constructor() {
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
        return (h("li", { key: '2ea597469fc69b442bc2467814ae4033a97fac75', class: 'breadcrumb-parent', "aria-current": `${this.isLastItem ? 'page' : ""}`, onClick: () => this.toggleDropdownMenu() }, h("li", { key: '24ddee6b25ea7d32668cc5d09a3e27b61236f834', class: "breadcrumb-wrapper" }, h("slot", { key: 'cc58eac4b526be9bcf006de50f4517da942733e3', name: 'label' }), h("div", { key: '829615059e607d599c1f30b2334f4a998803dc30', class: "dropdown-menu" }, h("slot", { key: 'f974f32c5452c8eaaef978891b176e6078c7296d' }))), !this.isLastItem && h("span", { class: "breadcrumb-divider" }, "/")));
    }
    static get is() { return "ifx-breadcrumb-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["breadcrumb-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["breadcrumb-item.css"]
        };
    }
    static get states() {
        return {
            "isLastItem": {}
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
            }, {
                "name": "breadcrumbMenuIconWrapper",
                "method": "menuWrapperEventReEmitter",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=breadcrumb-item.js.map
