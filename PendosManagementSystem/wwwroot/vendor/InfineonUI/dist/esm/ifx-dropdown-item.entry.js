import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f742c724.js';

const dropdownItemCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}";
const IfxDropdownItemStyle0 = dropdownItemCss;

const DropdownItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ifxDropdownItem = createEvent(this, "ifxDropdownItem", 7);
        this.icon = undefined;
        this.href = "";
        this.target = "_self";
        this.hide = false;
        this.size = 'l';
    }
    handleMenuSize(event) {
        this.size = event.detail;
    }
    handleEventEmission() {
        this.ifxDropdownItem.emit(this.el.textContent);
    }
    render() {
        let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
        return (h("a", Object.assign({ key: '338eb1a1ca3d1ca3240a0aa0465e80a7ac7fbd9e' }, hrefAttr, { onClick: () => this.handleEventEmission(), class: `dropdown-item ${this.size === 's' ? 'small' : ""} ${this.hide ? 'hide' : ""}` }), this.icon && h("ifx-icon", { class: "icon", icon: this.icon }), h("span", { key: 'ee62e58dbd035e3ba1cde37bd27947b718dd12a7' }, h("slot", { key: 'cc2e22d42df728024c928e7b7812c39006c501ac' }))));
    }
    get el() { return getElement(this); }
};
DropdownItem.style = IfxDropdownItemStyle0;

export { DropdownItem as ifx_dropdown_item };

//# sourceMappingURL=ifx-dropdown-item.entry.js.map