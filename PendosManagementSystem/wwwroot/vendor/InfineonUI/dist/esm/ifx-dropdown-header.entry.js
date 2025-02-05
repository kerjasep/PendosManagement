import { r as registerInstance, h } from './index-f742c724.js';

const dropdownHeaderCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}.dropdown-header{display:flex;padding:8px 16px;align-items:center;gap:8px;align-self:stretch;border-bottom:1px solid #EEEDED;font-family:var(--ifx-font-family)}.dropdown-header span{color:#575352;font-family:var(--ifx-font-family);font-size:14px;font-style:normal;font-weight:400;line-height:20px;}";
const IfxDropdownHeaderStyle0 = dropdownHeaderCss;

const DropdownHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'b38551de7ffa2aada728f95bb453732a9cb8664f', class: 'dropdown-header' }, h("span", { key: 'f077e4f268a8c3da54f3afcde0e36e1261885b9b' }, h("slot", { key: '0b0a786b24f6a9fa25abb82699e44d9c2e7b0cba' }))));
    }
};
DropdownHeader.style = IfxDropdownHeaderStyle0;

export { DropdownHeader as ifx_dropdown_header };

//# sourceMappingURL=ifx-dropdown-header.entry.js.map