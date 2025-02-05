import { r as registerInstance, h } from './index-f742c724.js';

const cardOverlineCss = ":root{--ifx-font-family:\"Source Sans 3\";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card-overline{font-size:1rem;font-weight:400;color:#575352;padding-bottom:4px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-all}";
const IfxCardOverlineStyle0 = cardOverlineCss;

const CardOverline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '0cf71da83004bca2ddc5d12dd04648666dc62656', class: "card-overline" }, h("slot", { key: 'b874f21e2e10f4805e74a203aa3245a3e4f9d8f1' })));
    }
};
CardOverline.style = IfxCardOverlineStyle0;

export { CardOverline as ifx_card_overline };

//# sourceMappingURL=ifx-card-overline.entry.js.map