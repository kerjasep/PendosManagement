'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const cardOverlineCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card-overline{font-size:1rem;font-weight:400;color:#575352;padding-bottom:4px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-all}";
const IfxCardOverlineStyle0 = cardOverlineCss;

const CardOverline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '0cf71da83004bca2ddc5d12dd04648666dc62656', class: "card-overline" }, index.h("slot", { key: 'b874f21e2e10f4805e74a203aa3245a3e4f9d8f1' })));
    }
};
CardOverline.style = IfxCardOverlineStyle0;

exports.ifx_card_overline = CardOverline;

//# sourceMappingURL=ifx-card-overline.cjs.entry.js.map