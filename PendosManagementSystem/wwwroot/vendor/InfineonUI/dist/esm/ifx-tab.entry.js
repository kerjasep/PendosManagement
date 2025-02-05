import { r as registerInstance, h, g as getElement } from './index-f742c724.js';

const tabCss = ":host{display:block}";
const IfxTabStyle0 = tabCss;

const IfxTab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.header = undefined;
        this.disabled = undefined;
        this.icon = '';
        this.iconPosition = 'left';
    }
    render() {
        return h("slot", { key: '5f2bfa7a1987f4a36f50fc2380b2426a0360c905' });
    }
    get el() { return getElement(this); }
};
IfxTab.style = IfxTabStyle0;

export { IfxTab as ifx_tab };

//# sourceMappingURL=ifx-tab.entry.js.map