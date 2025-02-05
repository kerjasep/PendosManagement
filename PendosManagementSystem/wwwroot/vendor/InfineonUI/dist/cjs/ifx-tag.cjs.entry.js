'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const tagCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;align-items:center;padding:4px 16px;border:1px solid #BFBBBB;border-radius:9999px;background-color:#FFFFFF;gap:8px;font-family:var(--ifx-font-family)}.container:hover{cursor:pointer;border-color:#8D8786}.container:active,.container.active{border-color:#1D1D1D}.container:focus:not(:active,.active){outline:none;border-color:#1D1D1D}.container .label-wrapper{text-decoration:none}.container .label-wrapper .label{margin:0;font-weight:400;font-size:1rem;line-height:20px;color:#1D1D1D}";
const IfxTagStyle0 = tagCss;

const Tag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = undefined;
    }
    render() {
        return (index.h("div", { key: '79060b35d8a8c130ccb194ada196dce28d0ce55c', "aria-label": "a tag", class: "container" }, this.icon && (index.h("ifx-icon", { icon: this.icon })), index.h("a", { key: '6ad9485c807b4dda4f650c62a521b5ab67f7740d', href: "javascript:void(null);", class: "label-wrapper" }, index.h("p", { key: '23927fc162df30ad9b3160182f3115b9dd8a1529', class: "label" }, index.h("slot", { key: 'a1c7a297b5c50b52ba42c8b20564bad499428657' })))));
    }
};
Tag.style = IfxTagStyle0;

exports.ifx_tag = Tag;

//# sourceMappingURL=ifx-tag.cjs.entry.js.map