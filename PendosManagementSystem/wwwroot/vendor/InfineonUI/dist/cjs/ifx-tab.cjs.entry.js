'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e9f2c4ad.js');

const tabCss = ":host{display:block}";
const IfxTabStyle0 = tabCss;

const IfxTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.header = undefined;
        this.disabled = undefined;
        this.icon = '';
        this.iconPosition = 'left';
    }
    render() {
        return index.h("slot", { key: '5f2bfa7a1987f4a36f50fc2380b2426a0360c905' });
    }
    get el() { return index.getElement(this); }
};
IfxTab.style = IfxTabStyle0;

exports.ifx_tab = IfxTab;

//# sourceMappingURL=ifx-tab.cjs.entry.js.map