'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const badgeCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.badge__container{display:inline-flex;justify-content:center;align-items:center;padding:4px 8px;gap:8px;border:1px solid #EEEDED;background-color:#EEEDED;border-radius:100px;font-family:var(--ifx-font-family);font-size:0.875rem;line-height:1.25rem;font-weight:400;color:#1D1D1D}";
const IfxBadgeStyle0 = badgeCss;

const Badge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'eaa5be7836515fc284e17ed7fb6acfdcc6ce11f1', class: "badge__container" }, index.h("slot", { key: 'f00f0415cb6cdfa25ce8e7b0df798f8a98eb2373' })));
    }
};
Badge.style = IfxBadgeStyle0;

exports.ifx_badge = Badge;

//# sourceMappingURL=ifx-badge.cjs.entry.js.map